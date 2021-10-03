import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utility } from 'src/utilities/utility';
import { CommonEl } from '../Models/CommonEl';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchService {

  constructor(private httpClient:HttpClient) { }

  public binarySearchToLeft(id:string, binaryEls:CommonEl[], maxN:number, timeInMills:number):Observable<CommonEl>{
    return this.httpClient.post<CommonEl>(Utility.algoservice_binarySearchToLeft+"/"+id+"/"+maxN+"/"+timeInMills, binaryEls);
  }

  public getCurrentMid(id:string):Observable<CommonEl>{
    return this.httpClient.get<CommonEl>(Utility.algoservice_binarySearch+"/"+id);
  }

}
