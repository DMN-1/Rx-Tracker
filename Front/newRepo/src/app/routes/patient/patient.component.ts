import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openOptDialog() {
    this.dialog.open(DialogElementsOptDialog);
  }
  openDeleteDialog() {
    this.dialog.open(DialogElementsDeleteDialog);
  }
}
@Component({
  selector: 'dialog-elements-opt-dialog',
  templateUrl: 'dialog-elements-opt-dialog.html',
  styleUrls: ['./patient.component.scss'],
})
export class DialogElementsOptDialog {}

@Component({
  selector: 'dialog-elements-delete-dialog',
  templateUrl: 'dialog-elements-delete-dialog.html',
  styleUrls: ['./patient.component.scss'],
})
export class DialogElementsDeleteDialog {}
