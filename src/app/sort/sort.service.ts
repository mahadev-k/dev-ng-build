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

  public getCurrentSortOrder():Observable<SortData[]>{
    return this.httpClient.get<SortData[]>(Utility.algoservice_sort);
  }

  public mergeSort(sortArr:SortData[], timeInMills:number):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_mergeSort+"/"+timeInMills, sortArr);
  }

  public bubbleSort(sortArr:SortData[], timeInMills:number):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_bubbleSort+"/"+timeInMills,sortArr);
  }

  public heapSort(sortArr:SortData[], timeInMills:number):Observable<SortData[]>{
    return this.httpClient.post<SortData[]>(Utility.algoservice_heapSort+"/"+timeInMills,sortArr);
  }

}
