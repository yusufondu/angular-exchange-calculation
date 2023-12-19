import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';
import { ButtonComponent } from '../../atoms/ee-button/ee-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TextComponent, ImageComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
