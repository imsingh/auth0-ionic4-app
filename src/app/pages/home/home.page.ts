import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: Array<any> = [];
  constructor(private usersService: UsersService, private navCtrl: NavController) {
    this.usersService.getUsers()
    .subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }

  openUser(index) {
    this.navCtrl.goForward(`/user/${index}`);
  }
}
