import { Injectable } from '@angular/core';
import {language} from './interfaces/index';

@Injectable()
export class LanguageService {

  constructor() {
    this.languages = [{ name: 'english' }, { name: 'hebrew' }];
  }
  public languages: [language]
}


