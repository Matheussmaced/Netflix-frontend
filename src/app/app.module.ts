import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, Search, Bell, ChevronDown } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { ButtonsHeaderComponent } from './components/header/components/buttons-header/buttons-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ButtonsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Search, Bell, ChevronDown  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
