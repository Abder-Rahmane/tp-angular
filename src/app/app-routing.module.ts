import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'inscription', component: RegistrationFormComponent },
  { path: '', component: MainComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
