import { Component } from '@angular/core';
import { ViewItemScreenComponent } from './components/view-item-screen/view-item-screen.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _ViewItemScreenComponent = ViewItemScreenComponent;
  title = 'app works!';
}
