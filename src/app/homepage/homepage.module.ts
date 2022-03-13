import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports:[
    ContentComponent
  ]
})
export class HomepageModule { }
