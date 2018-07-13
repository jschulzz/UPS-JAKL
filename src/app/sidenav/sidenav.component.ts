import { Component, OnInit } from '@angular/core';
import { LoginStateService } from '../login-state.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(public loginService: LoginStateService) {}

  ngOnInit() {}
}
