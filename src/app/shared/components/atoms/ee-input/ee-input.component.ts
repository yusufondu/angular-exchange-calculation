import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ee-input',
  standalone: true,
  imports: [],
  templateUrl: './ee-input.component.html',
  styleUrl: './ee-input.component.scss',
})
export class InputComponent {
  amount: number = 0;

  @Input() dynamicFor: string = '';
  @Input() dynamicLabelText: string = '';
  @Input() dynamicType: string = '';
  @Input() dynamicName: string = '';
  @Input() dynamicId: string = '';
  @Input() dynamicPlaceholder: string = '';
  @Input() dynamicClass: string = '';
  @Input() currency: string = '';

  @Output() newAmount = new EventEmitter<number>();

  @HostListener('input', ['$event.target.value'])
  onInput(value: number) {
    this.amount = value;
    this.newAmount.emit(this.amount);
  }
}
