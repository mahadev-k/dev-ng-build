import { CardInfo } from 'src/app/Interfaces/CardInfo';
import { default as cardInformations } from '../assets/CommonInfo/cardInfo.json';

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

    //Favorable colors
    public static bgColors:string[] = ["antiquewhite", "aqua", "chartreuse", "gold", "greenyellow", "lawngreen", "lime", "lightsteelblue"]

    //Sort Ids
    public static mergeSortId:string = "mergeSort";
    public static bubbleSortId:string = "bubbleSort";
    public static heapSortId:string = "heapSort";



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

    static getRandomBgColor = ():string => {
        let colors = Utility.bgColors;
        let number = UtilityFunctions.getRandomNumber(colors.length-1);
        return colors[number];
    }

    static getSortCardInfo = ():CardInfo => {
        return cardInformations.cardInfos.sortInfo;
    }

    static getBinarySearchCardInfo = ():CardInfo => {
        return cardInformations.cardInfos.binarySearchInfo;
    }

    static getSortInfo = (id:string):CardInfo => {
        switch(id){
            case Utility.mergeSortId : {
                return cardInformations.cardInfos.mergeSortInfo;
            }
            case Utility.bubbleSortId : return cardInformations.cardInfos.bubbleSortInfo;
            default : {
                return cardInformations.cardInfos.mergeSortInfo;
            }
        }
        
    }

    static getAllSortIds = ():string[] => {
        
        let ids = [Utility.mergeSortId, Utility.heapSortId, Utility.bubbleSortId];

        return ids;

    }

}