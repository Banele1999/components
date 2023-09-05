import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// used for timer countdown
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';



@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    PageComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
