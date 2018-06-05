import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  errorMsg;
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  checkUser() {
    this.errorMsg=null;
    if (this.username && this.password) {

      console.log("user name is ....." + this.username);
      this.commonService.getLoginFromController({ username: this.username, password: this.password })

        .then(response => {

          console.log("reached from the controller");
          this.router.navigate(['crud']);
           console.log("navigation to crud");
        })
        .catch(exception => {
          if (exception.status == 423) {
            this.errorMsg = 'User account is locked!';
          } else if (exception.status == 403) {
            this.errorMsg = 'Invalid Username/password!';
          } else {
            this.errorMsg = 'Server Error';
          }
          console.log("login exception is.......", exception);
        });

    }
  }
}

