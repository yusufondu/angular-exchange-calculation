import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ee-select',
  standalone: true,
  imports: [],
  templateUrl: './ee-select.component.html',
  styleUrl: './ee-select.component.scss',
})
export class SelectComponent implements OnInit {
  selectedFromCurrency: string = '';
  selectedToCurrency: string = '';

  @Input() dynamicFor: string = '';
  @Input() dynamicLabelText: string = '';
  @Input() dynamicType: string = '';
  @Input() dynamicName: string = '';
  @Input() dynamicId: string = '';
  @Input() dynamicPlaceholder: string = '';
  @Input() dynamicClass: string = '';
  @Input() allExchange: Array<any> = [];

  @Output() selectValue: EventEmitter<any> = new EventEmitter();
  @Output() sendEvent: EventEmitter<any> = new EventEmitter();
  @Output() toCurrencyValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedFromOptionText: EventEmitter<any> = new EventEmitter();
  @Output() selectedToOptionText: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.selectValue.emit('USD');
  }

  onSelect(event: any) {
    const selectedValue = event.target.value;
    const selectedFromOptionText = event.target.selectedOptions[0].textContent;
    const selectedToOptionText = event.target.selectedOptions[0].textContent;

    if (event.target.id === 'fromCurrency') {
      this.selectValue.emit(`${selectedValue}`);
      this.selectedFromCurrency = selectedValue;
      this.sendEvent.emit(event);
      this.selectedFromOptionText.emit(selectedFromOptionText);
    } else if (event.target.id === 'toCurrency') {
      this.selectedToCurrency = selectedValue;
      this.sendEvent.emit(event);
      this.selectValue.emit(`${selectedValue}`);
      this.toCurrencyValue.emit(event);
      this.selectedToOptionText.emit(selectedToOptionText);
    }
  }
}
