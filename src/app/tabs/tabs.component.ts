import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }
  public tabs: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1', customClass: 'customClass'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', customClass: 'customClass'}
  ];
  ngOnInit() {
  }

}
