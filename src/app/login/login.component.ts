import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],

})
export class LoginComponent implements OnInit {

  @ViewChild('logindialog') logindialog;
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('LoginForm') LoginForm;

  closeResult: string;
  errorMessage: string;
  constructor(translate: TranslateService, private modalService: NgbModal, private loginService: LoginService) {

   
  }
  public user: any;

  public Username: string;
  public Password: string;
  login() {
    console.log('login, login');
    this.loginService.login(this.Username, this.Password).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any>error);
  }
  open(logindialog) {

    console.log('login, open');
    this.modalService.open(logindialog, { backdrop: 'static', size: 'sm' } as NgbModalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit() {
    console.log('login, ngOnInit');
    //this.open(this.logindialog);
  }
}