import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginStateService } from '../login-state.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  public username = '';
  public myGroup: any;

  constructor(private router: Router, private loginService: LoginStateService) {
    this.loginService.state.next('');
  }

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  public onSubmit(form) {
    console.log(this.myGroup.value.username);
    this.loginService.state.next(this.myGroup.value.username);
    setTimeout(() => this.router.navigate(['/' + this.myGroup.value.username]), 100);
    console.log(this.loginService);
  }

  public updateUsername(e) {
    console.log(e);
  }
}
