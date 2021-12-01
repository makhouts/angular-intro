import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public options: Array<string>  = ['html', 'css', 'php', 'js'];
   friendModel = new Friend('','','','');

   constructor(private addFriendService:AddFriendService) {

   }

    myFunc = () => {
    this.addFriendService.addFriend(this.friendModel)
    .subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    
   };
}
