import {
  SHARED_DATA_PROVIDER,
  SharedData,
  SharedStateService,
} from 'state-lib';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
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
  IonFooter,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
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
    IonButtons,
    IonBackButton,
    IonFooter,
  ],
})
export class ListComponent {
  countries: any;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    @Optional()
    @Inject(SHARED_DATA_PROVIDER)
    public sharedData: SharedData,
    private sharedStateService: SharedStateService
  ) {}

  ionViewWillEnter() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe({
      next: (data: any) => {
        this.sharedStateService.getState().subscribe({
          next: (state: SharedData) => {
            this.countries = data.sort((a: any) => {
              return a.cca2 === state['defaultCountry'] ? -1 : 1;
            });
          },
        });
      },
    });
  }

  goToDetails(country: any) {
    this.navCtrl.navigateForward(['../details', country.cca3], {
      relativeTo: this.route,
    }); // usando código ISO como param
  }
}
