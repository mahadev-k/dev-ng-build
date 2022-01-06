import { Component, OnInit } from '@angular/core';
import { UtilityFunctions } from 'src/utilities/utility';
import { CardInfo } from '../Interfaces/CardInfo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sortAlgoInfo:CardInfo = UtilityFunctions.getSortCardInfo();
  binarySearchInfo:CardInfo = UtilityFunctions.getBinarySearchCardInfo();

  private readonly fwSlash = "/";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeTo = (path:string) => {
    this.router.navigateByUrl(this.fwSlash+path);
  }

}
