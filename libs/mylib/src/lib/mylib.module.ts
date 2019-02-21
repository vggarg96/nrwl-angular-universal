import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MycompComponent } from './mycomp/mycomp.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MycompComponent}
    ])
  ],
  declarations: [MycompComponent],
  // exports: [MycompComponent]
})
export class MylibModule {}
