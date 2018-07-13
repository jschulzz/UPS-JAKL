import { Component, OnInit } from '@angular/core';
import { LoginStateService } from '../login-state.service';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss']
})
export class ManagerViewComponent implements OnInit {
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
  errorIssues = ['No Seatbelt', "Doesn't Start", 'Flat Tire'];
  constructor(private loginService: LoginStateService) {}

  ngOnInit() {
    this.loginService.state.next('manager');
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
}
