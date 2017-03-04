import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { TabsComponent } from '../tabs/tabs.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',

  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
