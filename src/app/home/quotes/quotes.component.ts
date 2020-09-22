import { Component, OnInit } from '@angular/core';
import { BbapiService } from 'src/app/service/bbapi.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  citazioni:string[];
  constructor(private _bbapiService: BbapiService) { }

  ngOnInit(): void {
    this._bbapiService.getQuotes().subscribe((citazioni)=>{
      this.citazioni = citazioni;
    });
  }

}
