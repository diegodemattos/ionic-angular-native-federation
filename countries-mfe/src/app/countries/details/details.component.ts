import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [
    CommonModule,
    NgIf,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBackButton,
  ],
})
export class DetailsComponent {
  country: any;
  currency: string = '';
  language: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ionViewWillEnter() {
    const code = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .subscribe((data: any) => {
        this.country = data[0];
        this.currency =
          (Object.values(this.country.currencies || {})[0] as any).name || '';
        this.language =
          (Object.values(this.country.languages || {}) as any)[0] || '';
      });
  }
}
