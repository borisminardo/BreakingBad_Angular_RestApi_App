import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
myimage1:string= "assets/images/bbs.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
