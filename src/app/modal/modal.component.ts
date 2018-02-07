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

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }


}
