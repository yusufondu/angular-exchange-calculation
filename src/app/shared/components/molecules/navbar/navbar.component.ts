import { Component, Output, EventEmitter } from '@angular/core';
import { ImageComponent } from '../../atoms/ee-image/ee-image.component';
import { TextComponent } from '../../atoms/ee-text/ee-text.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextComponent, ImageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() loginClicked = new EventEmitter<void>();

  onLoginClick() {
    this.loginClicked.emit();
  }
}
