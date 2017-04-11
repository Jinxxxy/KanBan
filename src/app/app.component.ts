import { Component } from '@angular/core';
import { ViewItemScreenComponent } from './components/view-item-screen/view-item-screen.component'
import {AddNewScreenComponent} from './components//add-new-screen/add-new-screen.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _ViewItemScreenComponent = ViewItemScreenComponent;
  private _addNew = AddNewScreenComponent;
  title = 'app works!';
}
