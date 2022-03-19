import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Link } from 'src/app/model/link';
import { environment } from 'src/environments/environment';
import { UrlService } from '../../service/url.service';
import { Shortlink } from '../../model/Shortlink';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  public host=environment.apiUrl;
  public refreshing: boolean=false;
  public shortUrl: string="";
  public toolTip:string="Copiar enlace";
  public links:Shortlink[]=[];
  constructor(private urlService:UrlService) { }

  ngOnInit(): void {
    //TODO: obtener urls del local cache
    this.links=this.urlService.getUrlsFromLocalCache() || [];
    console.log(this.links);
  }

  public createShortUrl(shortUrlForm:NgForm):void {
    this.refreshing=true;
    const originalUrl:string=shortUrlForm.value['originalUrl'];
    //TODO: cambiar por async pipe
    this.urlService.createShortUrl(originalUrl).subscribe(
      (response:Link)=>{
        //TODO: enviar notificacion de exito

        //obtener del responseEntity, en lugar de String
        this.shortUrl=`${this.host}/${response.linkName}`;
        this.refreshing=false;
        let url=new Shortlink()
        url.originalUrl=originalUrl;
        url.shortUrl=this.shortUrl;
        this.urlService.addUrlsToLocalCache([url]);
      },
      (error:HttpErrorResponse)=>{
        //TODO: enviar notificacion de error
        this.refreshing=false;
        //TODO: agregar cors al backendter
      },
      ()=>{

      }
    );
  }

  public copiarTexto(){
    let enlaceGenerado:string=(document.getElementById("enlaceGenerado") as HTMLInputElement).value;
    navigator.clipboard.writeText(enlaceGenerado);
  }
}
