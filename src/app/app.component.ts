import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { NgbModule, NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login/login.service';
import { SetupService } from './setup/setup.service';
import { Router, ROUTER_CONFIGURATION, RouterModule, Routes } from '@angular/router';



 
import { TranslateService } from 'ng2-translate';

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoginService, SetupService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  /**
   *
   */
  constructor(translate: TranslateService, private router: Router, private loginService: LoginService, private setupService: SetupService) {
    translate.setDefaultLang('en');
    translate.use('he');
    this.router = router;
  }

  ngOnInit() {

    //this.setupService.validate().
    if (this.loginService.checkToken()) {

      //this.router.navigate(['setup']);
      // this.router.navigateByUrl(parsedUrl);

      this.router.navigateByUrl('/setup/', { skipLocationChange: true })
      //this.router.navigateByUrl("!#/login");
    }


  }
}







