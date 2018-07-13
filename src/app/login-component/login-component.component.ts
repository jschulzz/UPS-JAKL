import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  public username = '';
  public myGroup: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  public onSubmit(form) {
    // console.log(this.myGroup.value.username);
    this.router.navigate(['/' + this.myGroup.value.username]);
  }

  public updateUsername(e) {
    console.log(e);
  }
}
