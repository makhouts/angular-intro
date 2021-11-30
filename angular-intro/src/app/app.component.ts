import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public options: Array<string>  = ['html', 'css', 'php', 'js'];

   friendModel = new Friend('','','','');

}
