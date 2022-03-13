import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Link } from 'src/app/model/link';
import { environment } from 'src/environments/environment';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  private host=environment.apiUrl;
  public refreshing: boolean=false;
  public shortUrl: string="";

  constructor(private urlService:UrlService) { }

  ngOnInit(): void {
    //TODO: obtener urls del local cache
  }

  public createShortUrl(shortUrlForm:NgForm):void {
    this.refreshing=true;
    const originalUrl=shortUrlForm.value['originalUrl'];
    //TODO: cambiar por async pipe
    this.urlService.createShortUrl(originalUrl).subscribe(
      (response:Link)=>{
        //TODO: enviar notificacion de exito

        //obtener del responseEntity, en lugar de String
        this.shortUrl=`${this.host}/${response.linkName}`;
        this.refreshing=false;
      },
      (error:HttpErrorResponse)=>{
        //TODO: enviar notificacion de error
        this.refreshing=false;
        //TODO: agregar cors al backend
      },
      ()=>{

      }
    );
  }
}
