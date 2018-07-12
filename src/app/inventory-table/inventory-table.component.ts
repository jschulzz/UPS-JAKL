import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
// import{SignatureDialogComponent} from '../signature-dialog/signature-dialog.component';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {

  constructor( public dialog: MatDialog) {
  }

  ngOnInit() {
  }
// public openSignatureDia() {
//   this.dialog.open(SignatureDialogComponent);
//   }
}
