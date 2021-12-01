import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public options: Array<string>  = ['html', 'css', 'php', 'js'];
   friendModel = new Friend('','','','','');
   friendList:any;

   async ngOnInit() {
    this.friendList = await this.getFriends('http://localhost:9000/allFriends');
    console.log(this.friendList);
   }

   constructor(private addFriendService:AddFriendService) {

   }

    async myFunc() {
    this.addFriendService.addFriend(this.friendModel)
    .subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    this.friendList = await this.getFriends('http://localhost:9000/allFriends');
   };

   async getFriends(url:string): Promise<any> {
    const data = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parseData = await data.json();
    console.log(parseData);
    return parseData;
   }  

   
}
