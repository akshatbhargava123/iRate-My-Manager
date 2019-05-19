import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanySelectorPage } from './company-selector';

@NgModule({
  declarations: [
    CompanySelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanySelectorPage),
  ],
})
export class CompanySelectorPageModule {}
