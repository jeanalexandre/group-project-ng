import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Station } from '../models/station.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private currentStationSubject: BehaviorSubject<Station[]>;
  public currentStation: Observable<Station[]>;
  private currentUpdatingStationSubject: Subject<Station>;
  public currentUpdatingStation: Observable<Station>;
  private currentSelectedStationSubject: Subject<Station>;
  public currentSelectedStation: Observable<Station>;

  constructor(private http: HttpClient,
              private toastr: ToastrService) {
    this.currentStationSubject = new BehaviorSubject<Station[]>([]);
    this.currentStation = this.currentStationSubject.asObservable();
    this.currentUpdatingStationSubject = new Subject<Station>();
    this.currentUpdatingStation = this.currentUpdatingStationSubject.asObservable();
    this.currentSelectedStationSubject = new Subject<Station>();
    this.currentSelectedStation = this.currentSelectedStationSubject.asObservable();
    this.loadStations();
  }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${environment.apiBaseUrl}/raspberry`);
  }

  createStation(station: any) {
    return this.http.post(`${environment.apiBaseUrl}/raspberry`, station).subscribe(data => {
      this.toastr.success(`Création terminée`, 'Succés');
      this.currentStationSubject.next([...this.currentStationSubject.value, data]);
      return true;
    }, err => {
      this.toastr.error(err, 'Echec de création de la station');
      return false;
    });
  }

  updateStation(idStation: number, station: any) {
    return this.http.put(`${environment.apiBaseUrl}/raspberry/${idStation}`, station).subscribe(data => {
      this.toastr.success(`Modification effectuée`, 'Suucés');
      this.currentUpdatingStationSubject.next(null);
      this.loadStations();
      return true;
    }, err => {
      this.toastr.error(err, 'Echec de la modification de la station');
      return false;
    });
  }

  deleteStation(id: number) {
    return this.http.delete(`${environment.apiBaseUrl}/raspberry/${id}`).subscribe(() => {
      this.toastr.success('Suppression terminée');
      this.currentStationSubject.next(this.currentStationSubject.value.filter(station => station.id !== id));
    }, err => this.toastr.error(err, 'Echec de la suppresion ...'));
  }

  setUpdatingStation(station: Station) {
    this.currentUpdatingStationSubject.next(station);
  }

  setSelectedStation(station: Station) {
    this.currentSelectedStationSubject.next(station);
  }

  loadStations() {
    this.http.get<Station[]>(`${environment.apiBaseUrl}/raspberry`).subscribe(stations => {
      this.currentStationSubject.next(stations);
    });
  }

}
