import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardInfo } from 'src/app/Interfaces/CardInfo';
import { SortData } from 'src/app/Models/SortData';

@Component({
  selector: 'app-sort-card',
  templateUrl: './sort-card.component.html',
  styleUrls: ['./sort-card.component.css']
})
export class SortCardComponent implements OnInit {

  @Input() cardInfo!:CardInfo;
  @Input() sortArr!:SortData[];
  @Input() processingMap!:any;
  @Input() canvasId!:string;
  @Input() defaultDelayInExec!:number;
  @Input() sortTitle!:string;
  @Output() sort:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortFn = (event:Event):void => {
    this.sort.emit(event);
  }

}
