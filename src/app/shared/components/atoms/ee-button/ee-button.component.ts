import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ee-button',
  standalone: true,
  imports: [],
  templateUrl: './ee-button.component.html',
  styleUrl: './ee-button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() dynamicClass: string = '';
  @Input() dynamicType: string = '';
}
