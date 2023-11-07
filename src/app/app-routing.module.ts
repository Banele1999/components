import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { DropdownComponent } from './COMPONENTS/dropdown/dropdown.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { UploadfileComponent } from './COMPONENTS/uploadfile/uploadfile.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';

const routes: Routes = [
  { path: '', component: PageComponentsComponent},
  { path: 'countdown', component: CountdownComponent},
  { path: 'uploadfile', component: UploadfileComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'dropdown', component: DropdownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
