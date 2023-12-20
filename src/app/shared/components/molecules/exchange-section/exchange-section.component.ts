import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';
import { ButtonComponent } from '../../atoms/ee-button/ee-button.component';
import { InputComponent } from '../../atoms/ee-input/ee-input.component';
import { SelectComponent } from '../../atoms/ee-select/ee-select.component';
import { HttpClient } from '@angular/common/http';

interface SelectBoxes {
  dynamicFor: string;
  dynamicLabelText: string;
  dynamicName: string;
  dynamicId: string;
  dynamicClass: string;
}

@Component({
  selector: 'exchange-section',
  standalone: true,
  imports: [
    TextComponent,
    ImageComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './exchange-section.component.html',
  styleUrl: './exchange-section.component.scss',
})
export class ExchangeSectionComponent {
  private apiKey = 'ecdbbe93219f56421b19aa38';
  amount: number = 0;
  result: number = 0;
  currencyId: string = 'fromCurrency';
  exchangeRateTo: number = 0;
  toCurrency: string = 'USD';
  selectedFromOptionText: string = '';
  selectedToOptionText: string = '';
  allExchange: Array<any> = [];
  exchangeRatesObject: any = {};
  selectBoxes: SelectBoxes[] = [
    {
      dynamicFor: 'fromCurrency',
      dynamicLabelText: 'From',
      dynamicName: 'fromCurrency',
      dynamicId: 'fromCurrency',
      dynamicClass: 'selectInput',
    },
    {
      dynamicFor: 'toCurrency',
      dynamicLabelText: 'To',
      dynamicName: 'toCurrency',
      dynamicId: 'toCurrency',
      dynamicClass: 'selectInput',
    },
  ];

  @Input() currency: string = 'USD';
  @Input() currencySymbol: string = '$';

  @Output() convertClicked = new EventEmitter<boolean>();
  @Output() handleAmount = new EventEmitter<number>();
  @Output() handleSelectedFromOptionText = new EventEmitter<string>();
  @Output() handleSelectedToOptionText = new EventEmitter<string>();
  @Output() handleResult = new EventEmitter<number>();

  getExchangeRates(value: string) {
    this.http
      .get(`https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${value}`)
      .subscribe({
        next: (data: any) => {
          console.log('API Response:', data);
          this.allExchange = Object.keys(data?.conversion_rates);
          this.exchangeRateTo = data?.conversion_rates[this.toCurrency];

          this.exchangeRatesObject = Object.fromEntries(
            Object.entries(data?.conversion_rates).map(([key, value]) => [
              key as string,
              value as number,
            ])
          );

          this.exchangeRatesObject = data?.conversion_rates;
        },
        error: (error: any) => {
          console.error('API Error:', error);
        },
        complete: () => {},
      });
  }

  onsendEvent(event: any) {
    this.currencyId = event.target.id;
  }

  selectValue(data: string) {
    this.currency = data;
    this.currencySymbol =
      data === 'USD' ? '$' : data === 'EUR' ? '€' : data === 'GBP' ? '£' : '';

    if (this.currencyId === 'fromCurrency') {
      this.getExchangeRates(this.currency);
    }

    if (this.currencyId === 'toCurrency') {
      this.exchangeRateTo = this.exchangeRatesObject[this.currency];
    }
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getExchangeRates(this.currency);
  }

  onNewAmount(amount: number) {
    this.amount = amount;
    this.handleAmount.emit(this.amount);
  }

  handleConvert() {
    this.convertClicked.emit();
    this.result = this.amount * this.exchangeRateTo;
    this.handleResult.emit(this.result);
    this.handleSelectedToOptionText.emit(this.selectedToOptionText);
  }

  ontoCurrencyValue(event: any) {
    this.toCurrency = event.target.value;
  }

  onselectedFromOptionText(event: any) {
    this.selectedFromOptionText = event;
    this.handleSelectedFromOptionText.emit(this.selectedFromOptionText);
  }

  onselectedToOptionText(event: any) {
    this.selectedToOptionText = event;
  }
}
