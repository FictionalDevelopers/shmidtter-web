import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: 'registrationPage', component: RegistrationPageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: [RegistrationPageComponent]
})
export class AppRoutingModule {}
