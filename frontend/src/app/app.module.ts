import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//servicios
import { PhotosService } from "./services/photos.service";

//rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddphotoComponent } from './components/addphoto/addphoto.component';
import { ViewphotosComponent } from './components/viewphotos/viewphotos.component';
import { LoginComponent } from './components/login/login.component';
import { SanitizingPipe } from './pipes/sanitizing.pipe';
import { SanitizeDirective } from './directives/sanitize.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddphotoComponent,
    ViewphotosComponent,
    LoginComponent,
    SanitizingPipe,
    SanitizeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
