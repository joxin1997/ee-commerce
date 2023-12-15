import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-display-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './display-page.component.html',
  styleUrl: './display-page.component.css'
})
export class DisplayPageComponent {

}
