import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station.model';
import { ClassroomService } from '../../services/classroom.service';
import { Classroom } from '../../models/classroom.model';

@Component({
  selector: 'app-stations-form',
  templateUrl: './stations-form.component.html',
  styleUrls: ['./stations-form.component.scss']
})
export class StationsFormComponent implements OnInit {

  public title = 'AJOUTER UNE STATION';
  public stationForm: FormGroup;
  public classrooms: Classroom[];
  constructor(private formBuilder: FormBuilder,
              private stationService: StationService,
              private classroomService: ClassroomService,
              private toastr: ToastrService,
              ) { }

  ngOnInit() {
    this.stationForm = this.formBuilder.group({
      uid: ['', Validators.required],
      classroom: ['', Validators.required],
    });

    this.classroomService.getClassrooms().subscribe( c => this.classrooms = c);

  }

  get uid() {
    return this.stationForm.get('uid');
  }

  get classroom() {
    return this.stationForm.get('classroom');
  }

  onSubmit() {
    this.stationService.createStation(new Station(this.uid.value, this.classroom.value));
  }

}
