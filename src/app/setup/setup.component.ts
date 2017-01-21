import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbTabsetConfig, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SetupService } from './setup.service';
import { TranslatePipe } from 'angular2-translate';


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
  providers: [SetupService],
})
export class SetupComponent implements OnInit {
  @ViewChild('content') content;

  constructor(private modalService: NgbModal, private setupService: SetupService) { }

  ngOnInit() {
    this.modalService.open(this.content, { backdrop: 'static', size: 'lg' } as NgbModalOptions).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

}
