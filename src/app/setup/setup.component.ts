import { Component, OnInit, ViewChild } from '@angular/core';

import { SetupService } from './setup.service';
import { TranslatePipe } from 'angular2-translate';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from '../language.service';
import { ThemeService } from '../theme.service';
import { language, setupRequest, credentials } from '../interfaces/index';

import {
  Input,
  ContentChildren,
  QueryList,
  Directive,
  TemplateRef,
  ContentChild,
  AfterContentChecked,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  providers: [SetupService, LanguageService, ThemeService],
})
export class SetupComponent implements OnInit {

  @ViewChild('staticModal') staticModal;
  @ViewChild('LanguageSelector') LanguageSelector;
  @ViewChild('ThemeSelector') ThemeSelector;


  @ViewChild('theme') theme;
  constructor(private setupService: SetupService, private languageService: LanguageService, private themeService: ThemeService) {
    this.setupRequest = new setupRequest({ language: 'eng', theme: null, database: { name: null }, credentials: {} });
    this.dbOptions = [];
    this.dbOptions.push({ name: 'diskdb', diskdb: { 'host': 'server/data' } });
    this.dbOptions.push({ name: 'mongodb', mongodb: { host: 'mongodb://localhost:27017/nodulus' } });
    this.dbOptions.push({ name: 'rethinkdb', rethinkdb: { 'servers': [{ 'host': '127.0.0.1', 'port': 28015 }] } });
  }
  public setupRequest: setupRequest;
  public errorLabel: any;
  public dbOptions: Array<any>;
  public saveSetup() {

    //is setup valid?
    let cred = this.setupRequest.credentials;
    if (!this.setupRequest.database || !cred.email || !cred.password || (cred.password !== cred.password2))
      return;

    this.setupService.setup(this.setupRequest).subscribe((result) => {
    }, (error) => {
      this.errorLabel = JSON.parse(error._body);
    });;

  }
  public show() {
    this.staticModal.config = { backdrop: 'static' }
    this.staticModal.show();

  }
  public setProp(propName: string, value: any) {

    return this[propName];
  }
  ngOnInit() {
    this.show();
  }
}

