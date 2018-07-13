import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  closing = 'close';
  constructor() {}

  ngOnInit() {}

  log() {
    console.log('sfsf');
  }
  public submittedSignature() {
    if (this.closing === 'save') {
      alert('Success');
    }
  }
  public isClosing(method) {
    this.closing = method;
  }
}
