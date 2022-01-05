import { Component, Input, OnInit } from '@angular/core';
import { ProfileCardInfo } from 'src/app/Interfaces/CardInfo';

@Component({
  selector: 'app-profile-card-a',
  templateUrl: './profile-card-a.component.html',
  styleUrls: ['./profile-card-a.component.css']
})
export class ProfileCardAComponent implements OnInit {

  @Input() profileCardInfo!:ProfileCardInfo;

  constructor() { }

  ngOnInit(): void {
    this.getClassForContact();
  }

  getClassForContact =()=>{
    this.profileCardInfo.mail = "mailto:"+this.profileCardInfo.mail;
    this.profileCardInfo.contacts.forEach(
      e =>{
        if(!e.contactFiFa){
          e.contactFiFa = "fab fa-"+e.contactMethod;
        }
      }
    )
  }

}
