import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: any;
  constructor(private usersService: UsersService, private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.usersService.getUser(params.get('id')))
    ).subscribe(user => {
      this.user = user;
    });
  }

}
