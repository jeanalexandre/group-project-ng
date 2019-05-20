import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Station } from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor() {
  }

  getStations(): Observable<Station[]> {
    const stations = new BehaviorSubject<Station[]>([new Station('12345', 'RZ404', true)]);
    stations.next(stations.value.concat(new Station('12346', 'RZ406', true)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', false)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', true)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', false)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', true)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', true)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', true)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', false)));
    stations.next(stations.value.concat(new Station('12347', 'RZ408', false)));
    return stations;
  }

}
