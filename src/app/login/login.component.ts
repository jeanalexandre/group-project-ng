import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, first, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public passVisible = false;

  @ViewChild('passwordElement') passwordElement: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
  }

  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  passIsVisible(): void {
    if (this.passVisible) {
      this.passwordElement.nativeElement.type = 'password';
    } else {
      this.passwordElement.nativeElement.type = 'text';
    }
    this.passVisible = !this.passVisible;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.email.value, this.password.value)
      .pipe(
        catchError( err => {
          this.toastr.error(err);
          return throwError(err);
        }),
        finalize( () => {
          this.loading = false;
      }))
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.toastr.show(`Bonjour ${data.firstName} !`);
        });
  }
}
