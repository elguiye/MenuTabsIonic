import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: string, opentab?: any}>;
  rootPage="DashboardTabsPage";
  constructor(public navCtrl: NavController) {
    this.pages = [
        {title: 'Dashboard', component: 'DashboardTabsPage'},
        {title: 'My List', component: 'ListsTabsPage'},
        {title: 'Direck Profile Link', component: 'DashboardTabsPage', opentab: 1},
        {title: 'No Tab Link', component: 'NoTabsPage'},  
    ];
  }
  openPage(page){
    this.nav.setRoot(page.component, {opentab: page.opentab});
  }
}
