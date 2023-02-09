import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieRatesPage } from './movie-rates';

@NgModule({
  declarations: [
    MovieRatesPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieRatesPage),
  ],
})
export class MovieRatesPageModule {}
