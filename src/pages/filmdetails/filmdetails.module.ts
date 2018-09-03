import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmdetailsPage } from './filmdetails';

@NgModule({
  declarations: [
    FilmdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmdetailsPage),
  ],
})
export class FilmdetailsPageModule {}
