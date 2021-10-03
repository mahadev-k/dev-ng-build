import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { UtilityFunctions } from 'src/utilities/utility';
import { CommonEl } from '../Models/CommonEl';
import { BinarySearchService } from './binary-search.service';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent implements OnInit {

  binaryEls:CommonEl[] = [];
  processingMap:Map<string,boolean> = new Map();
  canvasMap:Map<string,Chart> = new Map();

  defaultDelayInExec:number = 500;


  constructor(private binarySearchService:BinarySearchService) { }

  ngOnInit(): void {

    Chart.register(...registerables);
    this.populateReqData(this.binaryEls);
    this.plotPolarArea("binarySearchToLeft", this.binaryEls);
    
  }

  populateReqData(binaryEls:CommonEl[]){

    while (binaryEls.length < 101) {
      let commonEl = new CommonEl(UtilityFunctions.getRandomNumber(100), UtilityFunctions.getRandomNumber(100), UtilityFunctions.getRandomNumber(100));
      commonEl.color = UtilityFunctions.getRandomColor();
      binaryEls.push(commonEl);
    }

    binaryEls.sort((e1, e2) => e1.cartesianDistance - e2.cartesianDistance);

    let previousWeight:number = 0;
    let i:number = 0;
    
    for(let bEl of binaryEls){
      bEl.index = i;
      bEl.weight += previousWeight;
      previousWeight = bEl.weight;
      i++;
    }

  }

  binarySearchToLeft(id:string, binaryEls:CommonEl[], weight:number, timeInMills?:number){

    if(!timeInMills){
      timeInMills = this.defaultDelayInExec;
    }

    let subscriber = 
          this.binarySearchService.binarySearchToLeft(id, binaryEls, weight, timeInMills)
            .subscribe(
              res => {
                this.plotBinarySearchResponse(id, res, binaryEls);
                this.processingMap.set(id, false);
              },
              error => {
                this.displayError(id, error.error.message);
                this.processingMap.set(id, false);
              }
            )

    this.binarySearchMonitor(id, subscriber, binaryEls, timeInMills);

  }

  binarySearchMonitor(id:string, subscription:Subscription, binaryEls:CommonEl[], timeInMills:number){
      setTimeout(()=>{

        this.binarySearchService.getCurrentMid(id).subscribe(
          res=>{
            if(!subscription.closed){
              this.processingMap.set(id, true);
              this.plotBinarySearchResponse(id, res, binaryEls);
              this.binarySearchMonitor(id, subscription, binaryEls, timeInMills);
            }
          },
          error=>{
            this.displayError(id, error.error.message);
          }
        )  
      }, timeInMills);
  }

  plotBinarySearchResponse(id:string, res:CommonEl, binaryEls:CommonEl[]){
    let binaryRes:CommonEl[] = [];
    for(let i=0; i<=res.index; i++){
      binaryRes[i] = new CommonEl(binaryEls[i].x, binaryEls[i].y, binaryEls[i].weight);
      binaryRes[i].color = "lightgreen";
      binaryRes[i].borderColor = "lightgreen"
    }
    binaryRes = [... binaryRes, ...binaryEls.slice(res.index)];
    this.plotPolarArea(id, binaryRes);
  }

  displayError(id:string, message:string){
    document.getElementById(id+"_Error")!.innerHTML = message;
  }

  plotPolarArea(id:string, binaryEls:CommonEl[]){

    let labels = binaryEls.map(e=>e.weight);
    let datas = binaryEls.map(e=>e.cartesianDistance);
    let colors = binaryEls.map(e=>e.color);
    let borderColors = binaryEls.map(e=>e.borderColor);

    let canvasPlot = this.canvasMap.get(id);

    if(canvasPlot){
      canvasPlot.destroy();
    }

    let chart = new Chart(id, {
      type: 'polarArea',
      data: {
        labels: labels,
        datasets: [{
          label: '# of BinaryEls',
          data: datas,
          //fill:"start",
          borderColor: borderColors,
          backgroundColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        animation: { 
            duration: 0
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.canvasMap.set(id, chart);


  }



}
