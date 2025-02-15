import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {HoverAffectDirective} from '../hover-affect.directive';

import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective, MatCardModule, RouterModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content: Content;
  
  showDetails() {
    console.log('Image clicked!');
    console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);
  }
 
}
