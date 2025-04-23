import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    // Logic to handle form submission, like sending an email or connecting to backend
    alert('Your message has been sent!');
  }
}
