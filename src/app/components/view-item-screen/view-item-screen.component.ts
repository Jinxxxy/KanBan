import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../models/card-item.model';
import {projectModel} from '../../models/project.model';
import {userProfile} from '../../models/owners.model';

@Component({
  selector: 'app-view-item-screen',
  templateUrl: './view-item-screen.component.html',
  styleUrls: ['./view-item-screen.component.css']
})
export class ViewItemScreenComponent implements OnInit {
  public static visibleChangeTask: cardItem = new cardItem(1,"Change TCS Config - Testing how this will affect the swim lane width", 3, 1, "Awaiting Development");
  public static visibleProject: projectModel;
  public static visibleUser: userProfile;
  public static visible: boolean = true;
  public static cardType: string = "ct";
  public ctAccess: Object = {
      getCTProp:(_propertyName: string):string=>{
        try{
          return ViewItemScreenComponent.visibleChangeTask[_propertyName];
        } catch(err){
          return "";
        }        
      }, 
      
  }

  hide(){
    ViewItemScreenComponent.visible = false;
  }
  static view(){
    ViewItemScreenComponent.visible = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
