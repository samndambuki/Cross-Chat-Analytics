import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acquisition',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.css'],
})
export class AcquisitionComponent {
  faUser = faUserCircle;
}
