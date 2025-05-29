import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [
    NgIf,
    NgFor,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonSpinner,
    IonLabel,
  ],
})
export class ListComponent {
  countries: any = [];

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe({
      next: (data: any) => {
        this.countries = data;
      },
    });
  }

  goToDetails(country: any) {
    this.navCtrl.navigateForward(['details', country.cca3]); // usando código ISO como param
  }
}
