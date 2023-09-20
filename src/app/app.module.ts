import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


// used for timer countdown
import { CountdownModule } from 'ngx-countdown';



// components
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { UploadfileComponent } from './COMPONENTS/uploadfile/uploadfile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    PageComponentsComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
