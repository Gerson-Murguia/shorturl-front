import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  public refreshing: boolean=false;

  constructor(private urlService:UrlService) { }

  ngOnInit(): void {
    //obtener urls del local cache
  }

  public createShortUrl():void {
    this.refreshing=true;
  }
}
