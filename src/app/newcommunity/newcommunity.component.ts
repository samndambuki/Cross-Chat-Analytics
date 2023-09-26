import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCirclePlus,
  faUserCircle,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newcommunity',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './newcommunity.component.html',
  styleUrls: ['./newcommunity.component.css'],
})
export class NewcommunityComponent {
  faUser = faUserCircle;
  circlePlus = faCirclePlus;

  showCommunityPlatformModal: boolean = false;
  showInstallationModal: boolean = false;
  showDeleteGroupModal: boolean = false;

  openCommunityPlatformModal() {
    this.showCommunityPlatformModal = true;
  }

  closeCommunityPlatFormModal() {
    this.showCommunityPlatformModal = false;
  }

  opeInstallationModal() {
    this.showInstallationModal = true;
  }

  closeInstallationModal() {
    this.showInstallationModal = false;
  }

  openDeleteGroupModal() {
    this.showDeleteGroupModal = true;
  }

  closeDeleteGroupModal() {
    this.showDeleteGroupModal = false;
  }
}
