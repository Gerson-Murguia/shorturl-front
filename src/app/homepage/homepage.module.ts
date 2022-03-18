import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],exports:[
    ContentComponent
  ]
})
export class HomepageModule { }
