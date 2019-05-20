import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Station } from '../models/station.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private currentStationSubject: BehaviorSubject<Station[]>;

  constructor(private http: HttpClient,
              private toastr: ToastrService) {
    this.currentStationSubject = new BehaviorSubject<Station[]>([]);
  }

  public get currentStationValue(): Observable<Station[]> {
    return this.currentStationSubject;
  }


  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${environment.apiBaseUrl}/raspberry`);
  }

  createStation(station: Station) {
    this.http.post(`${environment.apiBaseUrl}/raspberry`, station).subscribe(data => {
      this.toastr.success(`Station was created`, 'Success');
      this.currentStationSubject.next(this.currentStationSubject.value.concat(data));
      // this.refreshApps(paramsRefresh);
    }, error => this.toastr.error(error, 'Failed to create the application'));
  }

}
