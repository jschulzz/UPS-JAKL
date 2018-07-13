import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-pre-check-list',
  templateUrl: './pre-check-list.component.html',
  styleUrls: ['./pre-check-list.component.scss']
})
export class PreCheckListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public success() {
    alert('Successful Pre-Check!');
  }
}
