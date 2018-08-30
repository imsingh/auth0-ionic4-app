import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: Array<any> = [];
  constructor(private usersService: UsersService, private navCtrl: NavController, private authService: AuthService) {
  }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe((users: any) => {
      this.users = users;
    });
  }

  openUser(index) {
    this.navCtrl.goForward(`/user/${index}`);
  }
}
