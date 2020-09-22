import { Component, OnInit } from '@angular/core';
import { BbapiService } from '../../service/bbapi.service';
import { Personaggio } from 'src/app/model/personaggio/personaggio';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  copyPersonaggio: Personaggio[];
  personaggio:Personaggio[];

  constructor(private _bbapiService : BbapiService) { }

  ngOnInit(): void {
    this._bbapiService.getCharacters().subscribe((personaggio)=>{
      this.personaggio = personaggio;
      this.copyPersonaggio = personaggio;
  })}

  onSearch(input:string){
    const a = this.personaggio.filter((x)=>x.name.includes(input))
    this.copyPersonaggio = a;


  }
  

}
