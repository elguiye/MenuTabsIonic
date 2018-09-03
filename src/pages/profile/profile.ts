import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  films: Observable<any>;
  users: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
    });

    this.users = this.httpClient.get('assets/data/user.json');
    this.users
    .subscribe(data => {
      console.log('user data: ', data);
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openDetails(film) {
    this.navCtrl.push('FilmdetailsPage', {film: film});
  }

}
