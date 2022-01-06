import { SortData } from "../Models/SortData";

export interface SortFunctionInput {
    id:string;
    sortArr:SortData[];
    timeInMills?:number;
}