import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ClassComponent } from './layout/class/class.component';
import { ContactComponent } from './layout/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    GalleryComponent,
    ClassComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'Layout',component:LayoutComponent},
      {path:'Gallery',component:GalleryComponent},
      {path:'Contact',component:ContactComponent},
      {path:'Class',component:ClassComponent},
      {path:'Home',component:HomeComponent},
    {path:'',redirectTo: '/Home', pathMatch: 'full'  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
