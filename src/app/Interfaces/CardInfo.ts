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

export interface ProfileCardInfo {
    name:string;
    about:string;
    imageUri:string;
    mail:string;
    contacts:Contact[];
}

export interface Contact{
    contactUri:string;
    contactMethod:string;
    contactFiFa?:string;
}