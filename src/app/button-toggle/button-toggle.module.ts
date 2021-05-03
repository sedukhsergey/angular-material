import { NgModule } from '@angular/core';
import { ButtonToggleComponent } from './button-toggle.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ButtonToggleComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ButtonToggleModule { }
