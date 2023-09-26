import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  faUser = faUserCircle;
}
