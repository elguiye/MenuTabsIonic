import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmdetails',
  templateUrl: 'filmdetails.html',
})
export class FilmdetailsPage {
  film: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.film = this.navParams.get('film');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmdetailsPage');
  }

}
