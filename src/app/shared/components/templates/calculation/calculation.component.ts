import { Component, Input, OnInit } from '@angular/core';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';

@Component({
  selector: 'calculation',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.scss',
})
export class CalculationComponent {
  @Input() amount: number = 0;
  @Input() selectedFromOptionText: string = '';
  @Input() selectedToOptionText: string = '';
  @Input() result: number = 0;
}
