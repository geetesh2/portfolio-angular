import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ProjectComponent, CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI-Powered Sentiment Diary App',
      description: `Built an NLP-powered diary app that analyzed emotional tone from 100+ entries using the Gemini API with 98% accuracy.
Integrated Firebase Authentication and Firestore for secure user data handling and persistent storage.
Visualized emotional patterns over time using mood trend charts powered by Chart.js.
Modularized features like entry creation, editing, and sentiment feedback using reactive forms and services in Angular 17.`,
      image: 'diary.avif',
      techStack: ['Angular', 'Firebase', 'Gemini API', 'Chart.js'],
      githubLink: 'https://github.com/geetesh2/sentiment-diary',
      liveLink: 'https://geetesh2.github.io/sentiment-diary/login'
    },
    {
      title: 'Book Tracker App',
      description: `Developed a web app for managing reading lists with Firebase Authentication and Firestore, handling 100+ book entries.
Implemented secure login and real-time updates for adding, editing, and deleting books across categories.
Designed a recommender feature based on user reading history, achieving over 90% relevancy in book suggestions.`,
      image: 'book.jpeg',
      techStack: ['Angular', 'Books API', 'Firebase'],
      githubLink: 'https://geetesh2.github.io/book-tracker-app/',
      liveLink: '#'
    }
  ];
}
