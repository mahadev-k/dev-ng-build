import { Component, OnInit } from '@angular/core';
import { UtilityFunctions } from 'src/utilities/utility';
import { CardInfo } from '../Interfaces/CardInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sortAlgoInfo:CardInfo = UtilityFunctions.getSortCardInfo();
  binarySearchInfo:CardInfo = UtilityFunctions.getBinarySearchCardInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
