import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Station } from '../models/station.model';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: Station
  ) {
  }

  clearBar(): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  delete() {
    this.bottomSheetRef.dismiss({
      message: 'delete',
      data: this.data
    });
  }

  ngOnInit() {
  }
}
