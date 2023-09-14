import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './COMPONENTS/countdown/countdown.component';
import { UploadfileComponent } from './COMPONENTS/uploadfile/uploadfile.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';

const routes: Routes = [
  { path: '', component: PageComponentsComponent},
  { path: 'countdown', component: CountdownComponent},
  { path: 'uploadfile', component: UploadfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
