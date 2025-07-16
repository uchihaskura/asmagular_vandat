import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives like *ngFor

@Component({
  selector: 'app-category-list',
  imports: [ CommonModule ], // Import CommonModule for structural directives like *ngFor
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  categories = [
    { name: 'Electronics', id: 'devices' },
    { name: 'Books', id: 'book' },
    { name: 'Clothing', id: 'checkroom' },
    { name: 'Home & Kitchen', id: 'kitchen' },
    { name: 'Sports', id: 'sports' }
  ];

  constructor() {
    // Initialization logic can go here
  }

}
