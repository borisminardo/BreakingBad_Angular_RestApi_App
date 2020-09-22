import { Component, OnInit } from '@angular/core';
import { BbapiService } from '../../service/bbapi.service';

@Component({
  selector: 'app-charactersbyname',
  templateUrl: './charactersbyname.component.html',
  styleUrls: ['./charactersbyname.component.css']
})
export class CharactersbynameComponent implements OnInit {
personaggio:any;
  constructor(private _bbapiService: BbapiService) { }

  ngOnInit(): void {
    this._bbapiService.getCharByName(name).subscribe((personaggio)=>{
      this.personaggio = personaggio;
    });
  }

}
