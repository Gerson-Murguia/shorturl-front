import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  
  private host=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

 //falta mapear un modelo para el observable

  public createShortUrl(url:string): Observable<any> { 
    return this.httpClient.post<any>(`${this.host}/`,url);
  }

  public getOriginalUrl(shortUrl:string):Observable<any>{
    return this.httpClient.get<any>(`${this.host}/${shortUrl}`);
  }

  //falta implementar añadir la url original y la corta al cache local
  public addShortUrlToLocalCache(shortUrl:any[]):void{
    localStorage.setItem('shortUrl',JSON.stringify(shortUrl));
  }
  

}
