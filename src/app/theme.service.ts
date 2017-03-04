import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  constructor() {
    this.themes = ["amelia", "blooming", "cerulean", "desert", "paper", "green", "readable", "simplex", "spacelab", "Liquorice Schnitzel", "flat", "cyborg", "United", "superhero", "journal", "Lumen"];
  }
  public themes: string[];
}


