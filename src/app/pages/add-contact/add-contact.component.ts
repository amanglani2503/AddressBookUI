import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true, // ✅ Mark as standalone
  imports: [NgFor, NgIf, FormsModule], // ✅ Import FormsModule
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact = {
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  };

  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    this.contactService.addContact(this.contact).subscribe({
      next: () => {
        alert('Contact Added Successfully!');
        this.router.navigate(['/']); // ✅ Redirect to Home Page
      },
      error: (err) => console.error('Error:', err)
    });
}
}