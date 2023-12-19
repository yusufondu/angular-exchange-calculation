import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ee-image',
  standalone: true,
  imports: [],
  templateUrl: './ee-image.component.html',
  styleUrl: './ee-image.component.scss',
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
