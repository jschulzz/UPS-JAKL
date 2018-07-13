import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  closing = 'close';
  items = [];
  names = [
    'Laura Kristie',
    'Kait Masden',
    'Alex Uncleback',
    'John Schulz',
    'Joe Jones',
    'Neil Jeffries',
    'Kurt Pittman'
  ];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 11; i++) {
      this.items.push({
        id: Math.round(Math.random() * 1000000),
        name: this.names[Math.floor(Math.random() * this.names.length)],
        class: this.errorClass()
      });
    }
  }

  public errorClass() {
    const i = Math.random();
    if (i > 0.9) {
      return 'table-error';
    } else if (i > 0.8) {
      return 'table-warning';
    } else {
      return '';
    }
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
