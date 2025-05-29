import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent {
  constructor(private router: Router) {}

  goToNews() {
    this.router.navigate(['/news']);
  }

  goToWeather() {
    this.router.navigate(['/weather']);
  }

  goToCoutries() {
    this.router.navigate(['/countries']);
  }
}
