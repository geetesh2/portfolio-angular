import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobileScreen = false;

  constructor() {
    this.updateView();
  }

  @HostListener('window:resize')
  updateView() {
    this.isMobileScreen = window.innerWidth <= 768;
    if (!this.isMobileScreen) {
      this.isMenuOpen = false; // close menu on desktop
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
