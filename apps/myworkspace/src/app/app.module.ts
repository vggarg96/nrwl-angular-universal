import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
// import { MylibModule } from '@myworkspace/mylib/src/lib/mylib.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NxModule.forRoot(),
    // MylibModule
    RouterModule.forRoot(
      [
        { path: '', loadChildren: '@myworkspace/mylib/src/lib/mylib.module#MylibModule' },
      ],
      {
        initialNavigation: 'enabled'
        // useHash: true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
