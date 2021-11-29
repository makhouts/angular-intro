import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public options = ['html', 'css', 'php', 'js'];
  //  : Array<string> 
}
