import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../model/link';
import { Shortlink } from '../model/Shortlink';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  
  private host=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

 //falta mapear un modelo para el observable

  public createShortUrl(url:string): Observable<Link> { 
    return this.httpClient.post<any>(`${this.host}/`,url);
  }

  public getOriginalUrl(shortUrl:string):Observable<any>{
    return this.httpClient.get<any>(`${this.host}/${shortUrl}`);
  }

  //falta implementar añadir la url original y la corta al cache local
  public addUrlsToLocalCache(link:Shortlink[]):void{
    if (localStorage.getItem('links')) {
      let links:Shortlink[]=JSON.parse(localStorage.getItem('links') || '[]')
      link.forEach(e => {
        links.push(e);
      });
      localStorage.setItem('links',JSON.stringify(links))
    }else{
      localStorage.setItem('links',JSON.stringify(link));
    }
  }

  //obtirnr un array de shortlinks
  public getUrlsFromLocalCache():Shortlink[]|null { 
    if (localStorage.getItem('links')) {
      return JSON.parse(localStorage.getItem('links')?? '[]')
    }
    return null;
  }
  

}
