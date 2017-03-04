import { Component, ViewContainerRef, OnInit } from '@angular/core';

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
  constructor(translate: TranslateService, private router: Router, private loginService: LoginService, private setupService: SetupService) {
    translate.setDefaultLang('en');
    translate.use('he');
    this.router = router;
  }

  ngOnInit() {
    this.setupService.validate().subscribe((validationResult: any) => {      
      if (!this.loginService.checkToken()) {
        this.router.navigateByUrl("login");
      }
    }, (error) => {
      this.router.navigateByUrl('setup', { skipLocationChange: true });
    });
  }
}







