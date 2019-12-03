import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatExpansionModule,
  MatStepperModule,
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule { }