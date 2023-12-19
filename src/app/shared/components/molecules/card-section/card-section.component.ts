import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [TextComponent, ImageComponent],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss',
})
export class CardSectionComponent {}
