export class Utility{
    
    public static baseUri:string = "https://algoservice.herokuapp.com";

    //Services Uri
    public static algoServiceUri:string = Utility.baseUri+"/algoservice";



    //AlgoService API's
    //Sort
    public static algoservice_sort:string = Utility.algoServiceUri+"/sort";
    public static algoservice_mergeSort:string = Utility.algoservice_sort+"/mergeSort";
    public static algoservice_bubbleSort:string = Utility.algoservice_sort+"/bubbleSort";
    public static algoservice_heapSort:string = Utility.algoservice_sort+"/heapSort";

    //CommonAlgos
    public static algoservice_common:string = Utility.algoServiceUri+"/common";
    public static algoservice_binarySearchToLeft:string = Utility.algoservice_common+"/binarySearchToLeft";
    public static algoservice_binarySearch:string = Utility.algoservice_common+"/binarySearch";



}

export class UtilityFunctions{

    static getRandomNumber = (maxNum:number):number => {
        return Math.floor(Math.random() * maxNum);
    };
    
    static getRandomColor = () => {
        var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[UtilityFunctions.getRandomNumber(letters.length)];
                }
                return color;
    };

}