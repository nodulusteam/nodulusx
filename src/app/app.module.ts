import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import './rxjs-operators';

import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { MainComponent } from './main/main.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { SetupComponent } from './setup/setup.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: SetupComponent },
  { path: '', component: MainComponent }
  // { path: '**', component: LoginComponent }
];


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SetupComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BootstrapModalModule,
    ReactiveFormsModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })

  ],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
