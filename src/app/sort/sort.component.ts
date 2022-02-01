import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { SortData } from '../Models/SortData';
import { SortService } from './sort.service';
import { SortFunctionInput } from '../Interfaces/Common';
import { CardInfo } from '../Interfaces/CardInfo';
import { Utility, UtilityFunctions } from 'src/utilities/utility';
import { CardCanvasSortComponent } from '../ui-components/card-canvas-sort/card-canvas-sort.component';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  sortArr: SortData[] = [];
  sortMap:Map<string,SortData[]> = new Map();
  canvasMap:Map<string,Chart> = new Map();
  processingMap:Map<string,boolean> = new Map();
  currentCardInfo!:CardInfo;
  currentSortId!:any;
  currentSortMonitorTimeout!:any;

  defaultDelayInExec:number = 50;
  monitorTime:number = 50;
  sortIds:string[] = UtilityFunctions.getAllSortIds();
  constructor(private sortService: SortService, 
    private elementRef:ElementRef,
    private changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {

    this.populateNodesRand(this.sortArr);
    Chart.register(...registerables);
    this.updateCardInfo(Utility.mergeSortId);
    this.currentSortId = Utility.mergeSortId;
  }

  afterCanvasRender(id:string):void{
    let ctx = this.elementRef.nativeElement.querySelector("#"+id);
    if(ctx == null){
      setTimeout(
        () => this.afterCanvasRender(id), 
        200
      );
    }else{
      this.canvasMap.forEach(instance => instance.destroy());
      this.plotChart(this.currentSortId, this.sortArr);
    }
  }

  updateCardInfo = (id:string) => {
    this.currentCardInfo = UtilityFunctions.getSortInfo(id);
    this.currentSortId = id;
    this.afterCanvasRender(id);
  }

  sortFn = (event:SortFunctionInput) => {
    switch(event.id){
      case Utility.mergeSortId : 
        return this.mergeSort(event);
      case Utility.bubbleSortId : {
        event.timeInMills = 5; return this.bubbleSort(event);
      }
      case Utility.heapSortId : 
        return this.heapSort(event);
    }
  }



  populateNodesRand(sortArr: SortData[]) {

    while (sortArr.length < 101) {
      let sortData = new SortData(Math.floor(Math.random() * 100) + 1);
      sortData.index = sortArr.length + 1;
      sortArr.push(sortData);
    }

  }

  setDelayInExec(timeInMills?:number):number{
    
    if(timeInMills){
      this.monitorTime = timeInMills;
      return timeInMills;
    }

    return this.defaultDelayInExec;
  }

  mergeSort({id, sortArr, timeInMills}:SortFunctionInput):void {
    
    // let id: string, sortArr: SortData[], timeInMills:number;

    timeInMills = this.setDelayInExec(timeInMills);

    if(this.sortMap.get(id)){
      sortArr = this.sortMap.get(id)??[];
    }
  
    let response = this.sortService.mergeSort(sortArr, timeInMills, id)
                      .subscribe(
                        arr => {
                          this.plotChart(id, arr);
                          this.sortMap.set(id, arr);
                        },
                        error => {
                          console.log("Error Occured");
                        }
                      );
    this.sortMonitor(id, response, this.monitorTime);
  }

  bubbleSort({id, sortArr, timeInMills}:SortFunctionInput) { 

    timeInMills = this.setDelayInExec(timeInMills);

    if(this.sortMap.get(id)){
      sortArr = this.sortMap.get(id)??[];
    }

    let response = this.sortService.bubbleSort(sortArr, timeInMills, id)
                       .subscribe(
                         arr => {
                           this.plotChart(id, arr);
                           this.sortMap.set(id, arr);
                         },
                         error => {
                           console.log("Error Occured", error);
                         }
                       );
     this.sortMonitor(id, response, 10);
  }

  heapSort({id, sortArr, timeInMills}:SortFunctionInput) {
    
    timeInMills = this.setDelayInExec(timeInMills);

    if(this.sortMap.get(id)){
      sortArr = this.sortMap.get(id)??[];
    }

    let response = this.sortService.heapSort(sortArr, timeInMills, id)
                       .subscribe(
                         arr => {
                           this.plotChart(id, arr);
                           this.sortMap.set(id, arr);
                         },
                         error => {
                           console.log("Error Occured");
                         }
                       );
     this.sortMonitor(id, response, this.monitorTime);
  }

  sortMonitor(id:string, subscription:Subscription, monitorTime:number){
    
    this.processingMap.set(id,true);

    return setTimeout(() => {
      //console.log(subscription.closed);
     this.sortService.getCurrentSortOrder(id)
      .subscribe(
        arr => {
          let ctx = this.elementRef.nativeElement.querySelector("#"+id);
          if(ctx==null){
            subscription.unsubscribe();
            return;
          }

          if(arr && arr.length>0){

            this.plotChart(id, arr);
          }
          if(!subscription.closed){
            this.sortMonitor(id,subscription, monitorTime);
          }else{
            this.processingMap.set(id,false);
          }
        },
        error => {
          console.log("Error Occured");
        }
      );
    }, monitorTime);
  }


  plotChart(id: string, sortArr: SortData[]) {

    let datas = sortArr.map(data => data.data);
    let colors = sortArr.map(data => data.color);
    let labels = sortArr.map(data => data.data);

    let previousChart = this.canvasMap.get(id);
    if(previousChart){
      previousChart.destroy();
    }


    let chart = new Chart(id, {
                  type: 'line',
                  data: {
                    labels: labels,
                    datasets: [{
                      label: '# of SortData',
                      data: datas,
                      fill:"start",
                      borderColor:"blue",
                      backgroundColor:"skyblue",
                      borderWidth: 1
                    }]
                  },
                  options: {
                    animation: { 
                        duration: 10
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }
                });
  
    this.canvasMap.set(id,chart);

  }

}
