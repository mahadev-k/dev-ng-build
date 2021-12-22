import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/Interfaces/CardInfo';

@Component({
  selector: 'app-card-light-a',
  templateUrl: './card-light-a.component.html',
  styleUrls: ['./card-light-a.component.css']
})
export class CardLightAComponent implements OnInit {

  @Input() cardInfo!:CardInfo;
  @Input() classes?:string;

  headerClass:string = "box ";

  constructor() { }

  ngOnInit(): void {
    this.addClasses();
  }

  addClasses = () => {
    this.headerClass += this.cardInfo.headerColor+" "+this.classes;
  }

}
