import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SharedStateService } from 'state-lib';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private sharedStateService: SharedStateService) {
    this.sharedStateService.setState({
      defaultCountry: 'BR',
    });
  }
}
