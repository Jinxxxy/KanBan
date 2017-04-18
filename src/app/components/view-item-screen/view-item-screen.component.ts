import {Component, OnInit} from '@angular/core';
import {cardItem} from '../../models/card-item.model';
import {projectModel} from '../../models/project.model';
import {userProfile} from '../../models/owners.model';
import {keyConverter} from '../../helper-functions/keyConversion.method';
import {dataStore} from '../../service-layer/dataStore.service';

@Component({
  selector: 'app-view-item-screen',
  templateUrl: './view-item-screen.component.html',
  styleUrls: ['./view-item-screen.component.css','../../../assets/css/skeleton.css' ]
})
export class ViewItemScreenComponent implements OnInit {
  public _keyConverter = keyConverter
  public static _ds = dataStore;
  private getUser = keyConverter.getUser;
  private getProject = keyConverter.getProject;
  private getTask = keyConverter.getTask;

  //Externally Available
  public static visibleChangeTask: cardItem; 
  public static visibleProject: projectModel;
  public static visibleUser: userProfile;
  public static visible: boolean = false;
  public static cardType: string;
  public static clearDown(){
    ViewItemScreenComponent.visible = false;
    ViewItemScreenComponent.visibleChangeTask = null;
    ViewItemScreenComponent.visibleProject = null;
    ViewItemScreenComponent.visibleUser = null;
  }

  //External - CT
  public static ct_openTask(_cardItem: cardItem): void{ 
    if(ViewItemScreenComponent.visible === true){
      ViewItemScreenComponent.clearDown();
    }
    ViewItemScreenComponent.cardType = "ct"
    ViewItemScreenComponent.visibleChangeTask = _cardItem;    
    ViewItemScreenComponent.visible = true;    
    
  }
  public static ct_getProp(_propertyName: string):any{
    try{
      return ViewItemScreenComponent.visibleChangeTask[_propertyName];
    } catch(err){
      return "";
    }        
  }
  //External - Project
  public static p_openProject(_project: projectModel):void{
    if(ViewItemScreenComponent.visible === true){
      ViewItemScreenComponent.clearDown();
    }
    ViewItemScreenComponent.visibleProject = _project;
    ViewItemScreenComponent.cardType = "p";    
    ViewItemScreenComponent.visible = true;    
  }
  public static p_getProp(_propertyName: string):any{
      try{
        return ViewItemScreenComponent.visibleProject[_propertyName];
      } catch(err){
        return "";
      } 
  }
  //Extenal - getUser
  public static u_openUser(_user: userProfile):void{
    if(ViewItemScreenComponent.visible === true){
      ViewItemScreenComponent.clearDown();
    }
    ViewItemScreenComponent.visibleUser = _user;
    ViewItemScreenComponent.cardType = "u";    
    ViewItemScreenComponent.visible = true; 
  }
  public static u_getProp(_propertyName: string): any{
      try{
        return ViewItemScreenComponent.visibleUser[_propertyName];
      } catch(err){
        return "";
      } 
  }

  public ct = ViewItemScreenComponent.visibleChangeTask;
  public _cardType = ViewItemScreenComponent.cardType;
  //Internal - CT
  public _ct_openTask = ViewItemScreenComponent.ct_openTask;    
  public _ct_getProp = ViewItemScreenComponent.ct_getProp;
  //Internal - P
  public _p_openProject = ViewItemScreenComponent.p_openProject;
  public _p_getProp = ViewItemScreenComponent.p_getProp;
  //Internal - U
  public _u_openUser = ViewItemScreenComponent.u_openUser;
  public _u_getProp = ViewItemScreenComponent.u_getProp;
  //Internal - Generic  
  public _ds = ViewItemScreenComponent._ds;

  hide(){
    ViewItemScreenComponent.clearDown();
  }
  static view(){
    ViewItemScreenComponent.visible = true;
  }
  constructor(){
   
   }

  ngOnInit() {
  }

}
