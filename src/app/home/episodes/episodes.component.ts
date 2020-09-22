import { Component, OnInit } from '@angular/core';
import { BbapiService } from 'src/app/service/bbapi.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
episodi:string[];
  constructor(private _bbapiService: BbapiService) { }

  ngOnInit(): void {
    this._bbapiService.getEpisodes().subscribe((episodi)=>{
      this.episodi = episodi;
    });
  }

}
