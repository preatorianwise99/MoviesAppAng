import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieRatesDetailsPage } from './movie-rates-details';

@NgModule({
  declarations: [
    MovieRatesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieRatesDetailsPage),
  ],
})
export class MovieRatesDetailsPageModule {}
