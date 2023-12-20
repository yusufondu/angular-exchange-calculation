import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';

interface Card {
  imageSrc: string;
  imageAlt: string;
  cardTitle: string;
  cardDescription: string;
}

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [TextComponent, ImageComponent],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss',
})
export class CardSectionComponent {
  cards: Card[] = [
    {
      imageSrc: '../assets/secure.svg',
      imageAlt: 'secure',
      cardTitle: 'SECURE',
      cardDescription: `Send money online fast, secure and easy. Live tracking and notifications +
      flexible delivery and payment options.`,
    },
    {
      imageSrc: '../assets/accessible.svg',
      imageAlt: 'accessible',
      cardTitle: 'EASY ACCESSIBLE',
      cardDescription: `Create a chart for any currency pair in the world to see their currency
      history. These currency charts use live mid-market rates, are easy to use,
      and are very reliable.`,
    },
    {
      imageSrc: '../assets/fast.svg',
      imageAlt: 'fast',
      cardTitle: 'FAST AND RELIABLE',
      cardDescription: `Need to know when a currency hits a specific rate? The Xe Rate Alerts will
      let you know when the rate you need is triggered on your selected currency
      pairs.`,
    },
  ];
}
