import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatExpansionModule,
  MatStepperModule,
  MatSliderModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }