import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { RegistroMateriaComponent } from './pages/registro-materia/registro-materia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ButtonComponent,
    RegistroMateriaComponent,
    NavbarComponent,
    ItemCardComponent,
    SignupFormComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
