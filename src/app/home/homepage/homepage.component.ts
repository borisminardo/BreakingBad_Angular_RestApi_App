import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  elcamino:string="assets/images/elcamino.png";
  ampolle:string="assets/images/ampolle.png";
  end:string="assets/images/end.png";
  chars:string="assets/images/chars.png";
  nocks:string="assets/images/nocks.png";

  constructor() { }

  ngOnInit(): void {
  }

}
