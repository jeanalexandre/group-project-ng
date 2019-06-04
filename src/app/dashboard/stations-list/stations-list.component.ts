import { Component, OnInit, ViewChild } from '@angular/core';
import { StationService } from '../../services/station.service';
import { MatBottomSheet, MatSort } from '@angular/material';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet.component';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  public dataSource;
  public displayedColumns: string[] = ['uid', 'classroom', 'alive', 'modifier', 'supprimer'];
  public selectedStation: Station;

  constructor(private stationService: StationService,
              private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
    this.stationService.currentStation.subscribe((stations) => {
      this.dataSource = stations;
    });

    this.stationService.currentSelectedStation.subscribe( station => {
      this.selectedStation = station;
    });
  }

  delete(station: Station) {
    const sheetRef = this.bottomSheet.open(BottomSheetComponent, {
      data: station
    });
    sheetRef.afterDismissed().subscribe(data => {
      if (data && data.message === 'delete') {
        this.stationService.deleteStation(station.id);
      }
    });
  }

  update(station: Station) {
    this.stationService.setUpdatingStation(station);
  }

  selectStation(station: Station) {
    this.stationService.setSelectedStation(station);
  }

}
