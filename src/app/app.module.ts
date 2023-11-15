import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


// used for timer countdown
import { CountdownModule } from 'ngx-countdown';

//services
import { CountryService } from './SERVICES/country.service';

// components
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { UploadfileComponent } from './COMPONENTS/uploadfile/uploadfile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { DropdownComponent } from './COMPONENTS/dropdown/dropdown.component';
import { ResultsComponent } from './COMPONENTS/results/results.component';



@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    PageComponentsComponent,
    UploadfileComponent,
    NavbarComponent,
    DropdownComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
