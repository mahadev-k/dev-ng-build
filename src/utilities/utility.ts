export class Utility{
    
    public static baseUri:string = "http://localhost:8080";

    //Services Uri
    public static algoServiceUri:string = Utility.baseUri+"/algoservice";



    //AlgoService API's
    public static algoservice_sort:string = Utility.algoServiceUri+"/sort";
    public static algoservice_mergeSort:string = Utility.algoservice_sort+"/mergeSort";
    public static algoservice_bubbleSort:string = Utility.algoservice_sort+"/bubbleSort";
    public static algoservice_heapSort:string = Utility.algoservice_sort+"/heapSort";



}