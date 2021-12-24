export interface CardInfo {
    title:string;
    body:string;
    boldFooter?:string;
    headerColor?:string;
    buttonMessage?:string;
    displayIconPath?:string;
    references?:References[];
}

export interface References {
    url:string;
    displayText:string;
}