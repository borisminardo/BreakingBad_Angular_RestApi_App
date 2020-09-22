import { Component, OnInit } from '@angular/core';
import { BbapiService } from 'src/app/service/bbapi.service';

@Component({
  selector: 'app-deathcount',
  templateUrl: './deathcount.component.html',
  styleUrls: ['./deathcount.component.css']
})
export class DeathcountComponent implements OnInit {
random:any;
  constructor(private _bbapiService: BbapiService) { }

  ngOnInit(): void {
    this._bbapiService. getRandomDeath().subscribe((random)=>{
      this.random = random;
    });
  }

}
