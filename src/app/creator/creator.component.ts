import { Component, OnInit } from '@angular/core';
import { UtilityFunctions } from 'src/utilities/utility';
import { ProfileCardInfo } from '../Interfaces/CardInfo';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  profileCardInfos:ProfileCardInfo[] = UtilityFunctions.getAllCreators();

  ngOnInit(): void {
  }

}
