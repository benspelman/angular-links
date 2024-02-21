import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    LinksComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class AppComponent {
  title = 'angular-links';
}
