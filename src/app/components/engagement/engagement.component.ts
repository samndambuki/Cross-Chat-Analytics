import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent {
  faUser = faUserCircle;
}
