import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';
import { ButtonComponent } from '../../atoms/ee-button/ee-button.component';

interface HeaderTexts {
  class: string;
  text: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TextComponent, ImageComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerTexts: HeaderTexts[] = [
    {
      class: 'header-title-black',
      text: 'Exchange Your Money',
    },
    {
      class: 'header-title-green',
      text: 'Easily, Quickly And Securely',
    },
    {
      class: 'header-description',
      text: `Best source for currency conversion, sending money online and tracking
      exchange rates. Live tracking and notifications + flexible delivery and
      payment options.`,
    },
  ];
}
