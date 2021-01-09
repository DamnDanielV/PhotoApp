import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

//servicios
import { PhotosService } from "./services/photos.service";

//rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddphotoComponent } from './components/addphoto/addphoto.component';
import { ViewphotosComponent } from './components/viewphotos/viewphotos.component';
import { LoginComponent } from './components/login/login.component';

//pipes
import { SanitizingPipe } from './pipes/sanitizing.pipe';

//directives
import { SanitizeDirective } from './directives/sanitize.directive';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddphotoComponent,
    ViewphotosComponent,
    LoginComponent,
    SanitizingPipe,
    SanitizeDirective,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
