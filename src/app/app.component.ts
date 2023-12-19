import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/molecules/navbar/navbar.component';
import { HeaderComponent } from './shared/components/molecules/header/header.component';
import { CardSectionComponent } from './shared/components/molecules/card-section/card-section.component';
import { ExchangeSectionComponent } from './shared/components/molecules/exchange-section/exchange-section.component';
import { LoginModalComponent } from './shared/components/templates/login-modal/login-modal.component';
import { SelectComponent } from './shared/components/atoms/ee-select/ee-select.component';
import { CalculationComponent } from './shared/components/templates/calculation/calculation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    CardSectionComponent,
    ExchangeSectionComponent,
    LoginModalComponent,
    SelectComponent,
    CalculationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isOverlayVisible = false;
  isLoginModalVisible = false;
  showCalculation = false;
  amount: number = 0;
  selectedFromOptionText: string = '';
  selectedToOptionText: string = '';
  result: number = 0;

  receivedSelectValueName: string = '';
  SelectComponent!: SelectComponent;

  ngOnInit() {}

  onloginClicked() {
    this.isOverlayVisible = true;
    this.isLoginModalVisible = true;
  }

  onOverlayClick() {
    this.isOverlayVisible = false;
    this.isLoginModalVisible = false;
  }

  onconvertClicked() {
    this.showCalculation = true;
  }

  onhandleAmount(amount: number) {
    this.amount = amount;
  }

  onhandleSelectedFromOptionText(text: string) {
    this.selectedFromOptionText = text;
  }

  onhandleSelectedToOptionText(text: string) {
    this.selectedToOptionText = text;
  }

  onhandleResult(result: number) {
    this.result = result;
  }
}
