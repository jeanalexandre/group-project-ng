import { Component, OnInit, ViewChild } from '@angular/core';
import { StationService } from '../../services/station.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.scss']
})
export class StationsListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource;
  displayedColumns: string[] = ['uid', 'classroom', 'alive'];

  constructor(private stationService: StationService) {
  }

  ngOnInit() {
    this.stationService.getStations().subscribe(stations => {
      this.dataSource = new MatTableDataSource(stations);
      this.dataSource.sort = this.sort;
    });
  }

}
