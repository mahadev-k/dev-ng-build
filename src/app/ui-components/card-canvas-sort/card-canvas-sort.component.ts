import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SortData } from 'src/app/Models/SortData';

@Component({
  selector: 'app-card-canvas-sort',
  templateUrl: './card-canvas-sort.component.html',
  styleUrls: ['./card-canvas-sort.component.css']
})
export class CardCanvasSortComponent implements OnInit, AfterContentChecked {


  @Input() sortArr!:SortData[];
  @Input() processingMap!:any;
  @Input() canvasId!:string;
  @Input() defaultDelayInExec!:number;
  @Input() sortTitle!:string;
  @Output() sort:EventEmitter<any> = new EventEmitter();
  previousCanvasId?:string;

  constructor(private elementRef:ElementRef, private cd:ChangeDetectorRef) { }
  
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    Chart.register(...registerables);
  }



  sortData = (id:string, sortArr:SortData[]) =>{
    this.sort.emit({id,sortArr});
  }

}
