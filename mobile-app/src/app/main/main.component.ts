import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonFooter,
    IonToolbar,
    IonTitle,
    IonRouterOutlet,
  ],
})
export class MainComponent {}
