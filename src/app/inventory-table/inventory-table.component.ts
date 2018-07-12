import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  closing = 'close';
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  log() {
    console.log('sfsf');
  }
  public submittedSignature() {
    if (this.closing === 'save') {
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000
      });
    }
  }
  public isClosing(method) {
    this.closing = method;
  }
}
