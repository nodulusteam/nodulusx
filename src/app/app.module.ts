import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { ModalModule, TabsModule, AccordionModule } from 'ng2-bootstrap';


import { RouterModule, Routes } from '@angular/router';





// import './rxjs-operators';






import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeModule } from 'angular2-tree-component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SetupComponent,
    TopbarComponent,
    SidebarComponent,
    TabsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule,
    // RouterModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
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
