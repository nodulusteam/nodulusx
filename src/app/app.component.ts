import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { NgbModule, NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoginService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  /**
   *
   */
  constructor(private router: Router, private loginService: LoginService) {


  }

  ngOnInit() {
    // if (this.loginService.checkToken()) {
    //   var parsedUrl = this.router.parseUrl("login");
    //   this.router.navigate([parsedUrl]).then((result) => {
    //     debugger;
    //   });
    //   // this.router.navigateByUrl('!#/login', {skipLocationChange: true})
    //   //this.router.navigateByUrl("!#/login");
    // }


  }
}







