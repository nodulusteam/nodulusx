import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';





// import './rxjs-operators';




import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';


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
    // RouterModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    ReactiveFormsModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AppRoutingModule

  ],
  //providers: [Location], //{ provide: LocationStrategy, useClass: HashLocationStrategy }
  bootstrap: [AppComponent]
})
export class AppModule { }
