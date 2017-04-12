import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../Models/card-item.model';
import {dataStore} from '../../service-layer/datastore.service';
import {dbAndDataMethods} from '../../helper-functions/database-and-id-methods.method'
import {getData} from '../../service-layer/inout/getData.service';

@Component({
  selector: 'app-add-new-screen',
  templateUrl: './add-new-screen.component.html',
  styleUrls: ['./add-new-screen.component.css', '../../../assets/css/skeleton.css'], 
  
})
export class AddNewScreenComponent implements OnInit {
  public _getData: getData;
  public static visible: boolean = false;
  public static ds: dataStore;
  public name: string;
  public project: string;
  public owner: string;
  public _ds = AddNewScreenComponent.ds;
  public fullDescription: string;
  public static makeVisible(){
    AddNewScreenComponent.visible = true;
  }
  public tearDown(){
    AddNewScreenComponent.visible = false;
  }
  public addNewItem(_ds){
    var _addNew: cardItem = new cardItem(
      dbAndDataMethods.getId(_ds.cardList),
      this.name,
      3, 
      1,
      "Awaiting Approval"
      );
      _addNew.description = this.fullDescription;
      _ds.cardList.push(_addNew);
      //When DB is connected up then change the below to 
      //tear down the screen after the network call has returned
      //successfully
      this.tearDown();
  }
  constructor() {
    
  }

  ngOnInit() {
  }

}
