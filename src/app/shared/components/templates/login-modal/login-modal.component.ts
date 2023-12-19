import { Component } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';
import { ButtonComponent } from '../../atoms/ee-button/ee-button.component';
import { InputComponent } from '../../atoms/ee-input/ee-input.component';

@Component({
  selector: 'login-modal',
  standalone: true,
  imports: [TextComponent, ImageComponent, ButtonComponent, InputComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {}
