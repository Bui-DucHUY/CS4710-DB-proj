import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule for input binding
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent implements OnInit {
  
  providers: any[] = [];
  
  // Model for the "Add Provider" form
  newProvider = {
    firstName: '',
    lastName: '',
    addrss: '', // Matches your DB Column Name
    specialty: ''
  };

  constructor(@Inject(ApiService) private api: ApiService) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.api.getProviders().subscribe((data: any[]) => {
      this.providers = data;
    });
  }

  addProvider() {
    if (!this.newProvider.firstName || !this.newProvider.lastName) {
      alert('Name is required!');
      return;
    }

    this.api.addProvider(this.newProvider).subscribe(() => {
      this.loadProviders(); // Refresh list
      this.resetForm();
    });
  }

  deleteProvider(id: number) {
    if(confirm('Are you sure you want to delete this provider?')) {
      this.api.deleteProvider(id).subscribe(() => {
        this.loadProviders();
      });
    }
  }

  resetForm() {
    this.newProvider = { firstName: '', lastName: '', addrss: '', specialty: '' };
  }
}