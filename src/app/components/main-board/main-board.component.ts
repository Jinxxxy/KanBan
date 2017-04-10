import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../Models/card-item.model'
import {userProfile} from '../../Models/owners.model'
import {projectModel} from '../../Models/project.model'
import {keyConverter} from '../../helper-functions/keyConversion.method'
import {ViewItemScreenComponent} from '../view-item-screen/view-item-screen.component'

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  private swimLanesList: Array<string> = ["Awaiting Approval", "Awaiting Development","In Development", "Awaiting Testing", "Ready For Testing", "In Testing", "Awaiting Release", "Completed"]
  private cardList: Array<cardItem> = [];
  private ownersList: Array<userProfile> = [];
  private projectList: Array<projectModel> = [];
  
  //Dev Functions
  public logOptions(
    _any: any
  ){
    console.log(_any)
  }
  private getUsername = keyConverter.getUsername;
  private getProjectName = keyConverter.getProjectName;
  private getTask = keyConverter.getTask;
  private view(){
    ViewItemScreenComponent.view();
  }
  private viewTask(_any: any){
    alert(_any)
  }

  constructor() {
    //Dev Data
    var tempOne: cardItem = new cardItem(1,"Change TCS Config - Testing how this will affect the swim lane width", 3, 1, "Awaiting Development");
    var tempTwo: cardItem = new cardItem(2,"Change DLR Config", 1, 2, "In Testing");
    var tempThree: cardItem = new cardItem(3,"Change DCS Config", 2, 3, "Awaiting Approval");
    this.cardList.push(tempOne);
    this.cardList.push(tempTwo);
    this.cardList.push(tempThree);

    var userOne: userProfile = new userProfile("Craig Berry", "craigb", 1);
    var userTwo: userProfile = new userProfile("Laura Berry", "laurab", 2);
    var userThree: userProfile = new userProfile("Willow Berry", "willowb", 3)
    this.ownersList.push(userOne);
    this.ownersList.push(userTwo);
    this.ownersList.push(userThree);

    var projOne: projectModel = new projectModel("FCA1", 1);
    var projTwo: projectModel = new projectModel("FCA2", 2);
    var projThree: projectModel = new projectModel("FCA3", 3);
    this.projectList.push(projOne);
    this.projectList.push(projTwo);
    this.projectList.push(projThree);
  }

  ngOnInit() {
  }

}
