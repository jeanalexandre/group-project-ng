import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submited = false;
  public passVisible = false;

  @ViewChild('passwordElement') passwordElement: ElementRef;

  constructor(private formBuild: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuild.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  passIsVisible(): void {
    if (this.passVisible) {
      this.passwordElement.nativeElement.type = 'password';
    } else {
      this.passwordElement.nativeElement.type = 'text';
    }
    this.passVisible = !this.passVisible;
  }

  onSubmit(): void {
    this.submited = true;
    this.authenticationService.register({
      email: this.email.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      roles: ['DEFAULT_USER', 'ADMIN_USER'],
    });

    this.router.navigate(['/login']);

  }

}
