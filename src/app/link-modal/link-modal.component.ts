import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-modal',
  templateUrl: './link-modal.component.html',
  styleUrls: ['./link-modal.component.css'],
})
export class LinkModalComponent {
  submittedLink: string;

  constructor(
    public dialogRef: MatDialogRef<LinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.submittedLink = data.link;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
