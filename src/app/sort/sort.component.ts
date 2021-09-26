import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { SortData } from '../Models/SortData';
import { SortService } from './sort.service';

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
  
  defaultDelayInExec:number = 50;
  monitorTime:number = 50;

  constructor(private sortService: SortService) { }

  ngOnInit(): void {

    this.populateNodesRand(this.sortArr);
    Chart.register(...registerables);
    this.plotChart("mergeSort", this.sortArr);
    this.plotChart("bubbleSort", this.sortArr);
    this.plotChart("heapSort", this.sortArr);


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

  mergeSort(id: string, sortArr: SortData[], timeInMills?:number) {
    
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
    this.sortMonitor(id, response);
  }

  bubbleSort(id: string, sortArr: SortData[], timeInMills?:number) { 

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
                           console.log("Error Occured");
                         }
                       );
     this.sortMonitor(id, response);
  }

  heapSort(id: string, sortArr: SortData[], timeInMills?:number) {
    
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
     this.sortMonitor(id, response);
  }

  sortMonitor(id:string, subscription:Subscription){
      
      setTimeout(() => {
        //console.log(subscription.closed);
        this.sortService.getCurrentSortOrder(id)
        .subscribe(
          arr => {
            if(arr && arr.length>0){

              this.plotChart(id, arr);
            }
            if(!subscription.closed){
              this.processingMap.set(id,true);
              this.sortMonitor(id,subscription);
            }else{
              this.processingMap.set(id,false);
            }
          },
          error => {
            console.log("Error Occured");
          }
        );
      }, this.monitorTime);
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
