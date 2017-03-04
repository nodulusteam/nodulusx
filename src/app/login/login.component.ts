import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginService } from './login.service';
import { Router, ROUTER_CONFIGURATION, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],

})
export class LoginComponent implements OnInit {

  @ViewChild('staticModal') staticModal;
  private closeResult: string;
  private errorMessage: string;
  private user: any;
  private Username: string;
  private Password: string;

  constructor(translate: TranslateService, private router: Router, private loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.Username, this.Password).subscribe(
      user => {
        this.user = user
        this.router.navigateByUrl('');
      },
      error => this.errorMessage = <any>error);
  }


  private getDismissReason(reason: any): string {
    return "";
  }
  public show() {
    this.staticModal.config = { backdrop: 'static' }
    this.staticModal.show();

  }


  ngOnInit() {
    this.show();
  }
}