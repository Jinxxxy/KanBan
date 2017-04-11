import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../Models/card-item.model'
import {userProfile} from '../../Models/owners.model'
import {projectModel} from '../../Models/project.model'
import {keyConverter} from '../../helper-functions/keyConversion.method'
import {ViewItemScreenComponent} from '../view-item-screen/view-item-screen.component'
import {dataStore} from '../../service-layer/dataStore.service'
import {AddNewScreenComponent} from '../add-new-screen/add-new-screen.component'

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css', '../../../assets/css/skeleton.css']
})
export class MainBoardComponent implements OnInit {

  private swimLanesList: Array<string> = dataStore.swimLanesList
  private cardList: Array<cardItem> = dataStore.cardList;
  private ownersList: Array<userProfile> = dataStore.ownersList;
  private projectList: Array<projectModel> = dataStore.projectList;
  public _ViewItemScreenComponent = ViewItemScreenComponent;
  public _addNew = AddNewScreenComponent;
  public ds = dataStore;

  //Dev Functions
  public logOptions(
    _any: any
  ){
    console.log(_any)
  }
  private getUser = keyConverter.getUser;
  private getProject = keyConverter.getProject;
  private getTask = keyConverter.getTask;
  private view(){
    ViewItemScreenComponent.view();
  }
  private viewTask(_any: any){
    alert(_any)
  }

  constructor() {
    //Dev Data
    var tempOne: cardItem = new cardItem(1,"Change TCS Config - Testing how this will affect the swim lane width", 1, 1, "Awaiting Development");
    var tempTwo: cardItem = new cardItem(2,"Change DLR Config", 1, 2, "In Testing");
    var tempThree: cardItem = new cardItem(3,"Change DCS Config", 1, 3, "Awaiting Approval");
    this.ds.cardList.push(tempOne);
    this.ds.cardList.push(tempTwo);
    this.ds.cardList.push(tempThree);

    var userOne: userProfile = new userProfile("Craig Berry", "craigb", 1);
    var userTwo: userProfile = new userProfile("Laura Berry", "laurab", 2);
    var userThree: userProfile = new userProfile("Willow Berry", "willowb", 3)
    this.ds.ownersList.push(userOne);
    this.ds.ownersList.push(userTwo);
    this.ds.ownersList.push(userThree);

    var projOne: projectModel = new projectModel("FCA1", 1);
    var projTwo: projectModel = new projectModel("FCA2", 2);
    var projThree: projectModel = new projectModel("FCA3", 3);
    projOne.children = [1,1,1]
    this.ds.projectList.push(projOne);
    this.ds.projectList.push(projTwo);
    this.ds.projectList.push(projThree);
    ViewItemScreenComponent._ds = dataStore;
    AddNewScreenComponent.ds = dataStore;
    console.log(JSON.stringify(this.ds.cardList))
  }

  ngOnInit() {
  }

}
