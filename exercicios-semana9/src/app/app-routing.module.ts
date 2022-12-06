import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroMateriaComponent } from './pages/registro-materia/registro-materia.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: 'registro-materia',
    component: RegistroMateriaComponent,
  },
  {
    path: 'signup-form',
    component: SignupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
