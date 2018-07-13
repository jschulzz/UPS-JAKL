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
  warningIssues = ['Headlight Out', 'Taillight Out', 'Missing Lug Nut'];
  errorIssues = ['No Seatbelt', 'Doesn\'t Start', 'Flat Tire'];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 11; i++) {
      const assign = this.errorClass();
      this.items.push({
        id: Math.round(Math.random() * 1000000),
        name: this.names[Math.floor(Math.random() * this.names.length)],
        class: assign.class,
        description: assign.desc
      });
    }
  }

  public errorClass() {
    const i = Math.random();
    if (i > 0.9) {
      return {
        class: 'table-danger',
        desc: this.errorIssues[Math.floor(Math.random() * this.errorIssues.length)]
      };
    } else if (i > 0.8) {
      return {
        class: 'table-warning',
        desc: this.warningIssues[Math.floor(Math.random() * this.warningIssues.length)]
      };
    } else {
      return {
        class: '',
        desc: ''
      };
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
