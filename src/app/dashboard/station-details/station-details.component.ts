import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss']
})
export class StationDetailsComponent implements OnInit {

  public selectedStation: Station;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentSelectedStation.subscribe( station => {
      this.selectedStation = station;
    });
  }

}
