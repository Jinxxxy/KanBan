import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../Models/card-item.model'
import {userProfile} from '../../Models/owners.model'
import {projectModel} from '../../Models/project.model'
import {keyConverter} from '../../helper-functions/keyConversion.method'
import {ViewItemScreenComponent} from '../view-item-screen/view-item-screen.component'
import {dataStore} from '../../service-layer/dataStore.service'
import {AddNewScreenComponent} from '../add-new-screen/add-new-screen.component'
import {getData} from '../../service-layer/inout/getData.service';
import {setData} from '../../service-layer/inout/setData.service';
import 'rxjs/Rx';
import {startUpMapper} from '../../service-layer/startupMapping.service'
import {team} from '../../Models/team.model';
import {Response} from '@angular/http'

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css', '../../../assets/css/skeleton.css'],
  providers: [getData, setData]
})
export class MainBoardComponent implements OnInit {
  private _setData: setData;
  private swimLanesList: Array<string>;
  private cardList: Array<cardItem>;
  private ownersList: Array<userProfile>;
  private projectList: Array<projectModel>;
  private teamList: Array<team>;
  public _ViewItemScreenComponent = ViewItemScreenComponent;
  public _addNew = AddNewScreenComponent;
  public ds = dataStore;
  public _getData: getData;
  private getUser = keyConverter.getUser;
  private getProject = keyConverter.getProject;
  private getTask = keyConverter.getTask;
  public test(){
    alert("save")
  }
  public saveAll(){

    console.log(dataStore.cardList)
    this._setData.saveAllCards(
      dataStore.cardList
    )
  }
  

  constructor(private __getData: getData, private __setData: setData) {
    this._setData = __setData;
    //Dev Data
    // var tempOne: cardItem = new cardItem(1,"Change TCS Config - Testing how this will affect the swim lane width", 1, 1, "Awaiting Development");
    // var tempTwo: cardItem = new cardItem(2,"Change DLR Config", 1, 2, "In Testing");
    // var tempThree: cardItem = new cardItem(3,"Change DCS Config", 1, 3, "Awaiting Approval");
    // tempOne.description = "FULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    // this.ds.cardList.push(tempOne);
    // this.ds.cardList.push(tempTwo);
    // this.ds.cardList.push(tempThree);

    // var userOne: userProfile = new userProfile("Craig Berry", "craigb", 1);
    // var userTwo: userProfile = new userProfile("Laura Berry", "laurab", 2);
    // var userThree: userProfile = new userProfile("Willow Berry", "willowb", 3)
    // this.ds.ownersList.push(userOne);
    // this.ds.ownersList.push(userTwo);
    // this.ds.ownersList.push(userThree);

    // var projOne: projectModel = new projectModel("FCA1", 1);
    // var projTwo: projectModel = new projectModel("FCA2", 2);
    // var projThree: projectModel = new projectModel("FCA3", 3);
    // projOne.children = [1,1,1]
    // this.ds.projectList.push(projOne);
    // this.ds.projectList.push(projTwo);
    // this.ds.projectList.push(projThree);
    var teamOne: team = new team("TL1 Team", "Development");
    var teamTwo: team = new team("TL2 Team", "Testing");
    var teamThree: team = new team("TL3 Team", "Analysis");
    this.teamList = [];
    this.teamList.push(teamOne);
    this.teamList.push(teamTwo);
    this.teamList.push(teamThree);
    console.log(this.teamList);
  

    console.log(JSON.stringify(this.ds.swimLanesList))
    this._getData = __getData
    var sum =  new startUpMapper();
    this._getData.startup().map((responseObject)=>{

      //Re-visit all of this************************

      console.log(responseObject.json())
      this.swimLanesList = responseObject.json()["swimlanes"][0].names;
      this.ds.swimLanesList = responseObject.json()["swimlanes"][0].names;
      dataStore.swimLanesList = responseObject.json()["swimlanes"][0].names;

      this.cardList = responseObject.json()["cards"];
      this.ds.cardList = responseObject.json()["cards"];
      dataStore.cardList = responseObject.json()["cards"];
      console.log(this.cardList);
      
      this.ownersList = responseObject.json()["users"];
      this.ds.ownersList = responseObject.json()["users"];
      dataStore.ownersList = responseObject.json()["users"];
      console.log(this.ownersList);
      
      this.projectList = responseObject.json()["projects"];
      this.ds.projectList = responseObject.json()["projects"];
      dataStore.projectList = responseObject.json()["projects"];
      console.log(this.projectList);
   
      ViewItemScreenComponent._ds = dataStore;
      AddNewScreenComponent.ds = dataStore;  
      dataStore.setPrototypeExtensions();
    


    //Re-visit all of this************************

    }).subscribe();
  }

  ngOnInit() {
        

  }

}
