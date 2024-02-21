import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Link } from './../../models/link';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LinkModalComponent } from '../../link-modal/link-modal.component';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, NgForOf, FormsModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  links: Link[] | undefined;
  titleInputLink: string = '';
  urlInputLink: string = '';

  ngOnInit() {
    this.links = [
      {
        title: 'Wikipedia',
        content: 'https://wikipedia.org',
      },
      {
        title: 'Stack Overflow',
        content: 'https://stackoverflow.org',
      },
    ];
  }

  constructor(public dialog: MatDialog) {}

  addLink() {
    // Regular expression pattern for URL validation
    const urlPattern =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    if (!this.urlInputLink.match(urlPattern) || !this.urlInputLink) {
      alert(
        'Please enter a valid URL, namely in the format of "https://examplelink.domain"'
      );
    } else if (!this.titleInputLink) {
      alert('Please enter a valid title');
    } else {
      this.links?.push({
        title: this.titleInputLink,
        content: this.urlInputLink,
      });

      // Open modal with submitted link
      this.openLinkModal(this.urlInputLink);

      this.titleInputLink = '';
      this.urlInputLink = '';
    }
  }

  openLinkModal(link: string): void {
    const dialogRef = this.dialog.open(LinkModalComponent, {
      width: '250px',
      data: { link: link },
    });
  }

  deleteLink(id: number) {
    this.links = this.links?.filter((v, i) => i !== id);
    console.log(`Deleted link with an id of ${id}`);
  }
}
