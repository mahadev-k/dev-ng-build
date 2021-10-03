import { Node } from "../Interfaces/Node";

export class CommonEl implements Node{
    
    data: number = 0;
    color: string = "blue";
    index: number = 0;
    borderColor:string = "blue";

    //commonEl
    x:number = 0;
    y:number = 0;

    weight:number = 0;

    cartesianDistance:number = 0;

    constructor(x:number, y:number, weight:number){

        this.x = x;
        this.y = y;
        this.weight = weight;
        
        this.cartesianDistance = this.calculateCartesianDistance(x, y);
    }

    calculateCartesianDistance(x:number, y:number):number{

        return Math.sqrt(x*x + y*y);
    }

}