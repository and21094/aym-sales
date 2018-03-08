import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  htmlContent: SafeHtml;
  title: string;
  negative: string;
  positive: string;

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  initValues(title, positive, negative) {
  	this.title = title;
  	this.positive = positive
  	this.negative = negative
  }

}
