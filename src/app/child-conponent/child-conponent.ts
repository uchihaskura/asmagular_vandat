import { Component } from '@angular/core';
import { Input } from '@angular/core'; // Import input decorator


@Component({
  selector: 'app-child-conponent',
  imports: [],
  templateUrl: './child-conponent.html',
  styleUrl: './child-conponent.css'
})
export class ChildConponent {
  @Input() childData: string = '';

}
