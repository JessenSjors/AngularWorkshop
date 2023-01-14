import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from "primeng/radiobutton";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputNumberModule,
    ButtonModule,
    RadioButtonModule,
    MenubarModule
  ],
  exports: [
    InputNumberModule,
    ButtonModule,
    RadioButtonModule,
    MenubarModule
  ]
})
export class PrimengModule { }
