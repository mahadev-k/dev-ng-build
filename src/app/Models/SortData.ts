import { Node } from "../Interfaces/Node";

const backgroundColors : string[] = ['rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)']

export class SortData implements Node {
    data: number = 0;
    color: string = "Blue";
    index: number = 0


    constructor(data: number) {
        this.data = data;
        this.color = backgroundColors[backgroundColors.length%data];
    }
}