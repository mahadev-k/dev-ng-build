import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utility } from 'src/utilities/utility';
import { SortData } from '../Models/SortData';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private httpClient:HttpClient) { }

  public getCurrentSortOrder(sortId:string):Observable<SortData[]>{
    return this.httpClient.get<SortData[]>(Utility.algoservice_sort+"/"+sortId);
  }

  public mergeSort(sortArr:SortData[], timeInMills:number, sortId:string):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_mergeSort+"/"+timeInMills+"/"+sortId, sortArr);
  }

  public bubbleSort(sortArr:SortData[], timeInMills:number, sortId:string):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_bubbleSort+"/"+timeInMills+"/"+sortId,sortArr);
  }

  public heapSort(sortArr:SortData[], timeInMills:number, sortId:string):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_heapSort+"/"+timeInMills+"/"+sortId,sortArr);
  }

}
