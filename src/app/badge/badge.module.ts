import { NgModule } from '@angular/core';
import {BadgeComponent} from './badge.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [BadgeComponent],
  imports: [
    SharedModule,
  ]
})
export class BadgeModule { }
