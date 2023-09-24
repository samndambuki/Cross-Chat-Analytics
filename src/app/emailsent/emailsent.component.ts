import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emailsent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emailsent.component.html',
  styleUrls: ['./emailsent.component.css'],
})
export class EmailsentComponent {
  email: string = '';
  password: string = '';
}
