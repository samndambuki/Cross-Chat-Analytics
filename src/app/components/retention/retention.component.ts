import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-retention',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.css']
})
export class RetentionComponent {
  faUser = faUserCircle;
}
