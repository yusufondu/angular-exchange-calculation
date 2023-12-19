import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ee-text',
  standalone: true,
  imports: [],
  templateUrl: './ee-text.component.html',
  styleUrl: './ee-text.component.scss',
})
export class TextComponent {
  @Input() text = '';
}
