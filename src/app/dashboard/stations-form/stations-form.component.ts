import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StationService } from '../../services/station.service';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom.model';
import { Observable } from 'rxjs';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-stations-form',
  templateUrl: './stations-form.component.html',
  styleUrls: ['./stations-form.component.scss']
})
export class StationsFormComponent implements OnInit {

  public title = 'AJOUTER UNE STATION';
  public stationForm: FormGroup;
  public classrooms: Classroom[];
  public updatingStation: Station;
  constructor(private formBuilder: FormBuilder,
              private stationService: StationService,
              private classroomService: ClassroomService,
              ) { }

  ngOnInit() {
    this.stationForm = this.formBuilder.group({
      uid: ['', Validators.required],
      classroom: ['', Validators.required],
    });

    this.classroomService.getClassrooms().subscribe( c => this.classrooms = c);

    this.stationService.currentUpdatingStation.subscribe( (station) => {
      this.updatingStation = station;
      if (station) {
        this.uid.setValue(station.uid);
        this.classroom.setValue(station.classroom.id);
      }
    });
  }

  get uid() {
    return this.stationForm.get('uid');
  }

  get classroom() {
    return this.stationForm.get('classroom');
  }

  onSubmit() {
    if (this.updatingStation) {
      if (this.stationService.updateStation(this.updatingStation.id, {uid: this.uid.value, idClassroom: this.classroom.value})) {
        this.stationForm.reset();
        this.resetForm(this.stationForm);
      }
    } else {
      if (this.stationService.createStation({uid: this.uid.value, idClassroom: this.classroom.value})) {
        this.stationForm.reset();
        this.resetForm(this.stationForm);
      }
    }
  }

  resetForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

  clearUpdating() {
    this.stationService.setUpdatingStation(null);
  }

}
