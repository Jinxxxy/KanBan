import { Component, OnInit } from '@angular/core';
import {cardItem} from '../../Models/card-item.model';
import {dataStore} from '../../service-layer/datastore.service'

@Component({
  selector: 'app-add-new-screen',
  templateUrl: './add-new-screen.component.html',
  styleUrls: ['./add-new-screen.component.css', '../../../assets/css/skeleton.css']
})
export class AddNewScreenComponent implements OnInit {
  public static visible: boolean = false;
  public static ds: dataStore;
  public name: string;
  public project: string;
  public owner: string;
  public _ds = AddNewScreenComponent.ds;
  public static makeVisible(){
    AddNewScreenComponent.visible = true;
  }
  public tearDown(){
    AddNewScreenComponent.visible = false;
  }
  public log(_any:any){

  }
  constructor() {
    
  }

  ngOnInit() {
  }

}
