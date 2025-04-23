import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ProjectComponent,CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Sentiment Diary',
      description: 'AI-powered diary app with sentiment analysis and mood tracking.',
      image: 'assets/images/sentiment-diary.png',
      techStack: ['Angular', 'Firebase', 'MeaningCloud API'],
      githubLink: 'https://github.com/Geetesh-p/sentiment-diary',
      liveLink: 'https://sentiment-diary.web.app'
    },
    {
      title: 'Tenant-Landlord Logbook',
      description: 'Helps resolve rental disputes via transparent, timestamped logging.',
      image: 'assets/images/logbook.png',
      techStack: ['Angular', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/Geetesh-p/logbook',
      liveLink: '#'
    }
  ];
}
