import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  faUser = faUserCircle;
}
