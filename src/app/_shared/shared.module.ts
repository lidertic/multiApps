import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubnavComponent } from './subnav/subnav.component';
@NgModule({
  imports: [CommonModule],
  declarations: [SubnavComponent],
  exports: [CommonModule, FormsModule, SubnavComponent]
})
export class SharedAppModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule
  //   };
  // }
}
