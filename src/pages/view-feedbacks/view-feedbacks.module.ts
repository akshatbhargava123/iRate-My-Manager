import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFeedbacksPage } from './view-feedbacks';

import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    ViewFeedbacksPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFeedbacksPage),
    AutoCompleteModule
  ],
})
export class ViewFeedbacksPageModule {}
