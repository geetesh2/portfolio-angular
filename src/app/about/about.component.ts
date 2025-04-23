import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule]
})
export class AboutComponent {
  skills = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Express.js', icon: 'fas fa-terminal' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Jest', icon: 'fas fa-vial' },
    { name: 'Cypress', icon: 'fas fa-bug' },
    { name: '.NET', icon: 'fas fa-network-wired' }
  ];
}
