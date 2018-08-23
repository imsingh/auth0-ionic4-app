import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = [];
  constructor(private http: HttpClient) { }

  getUsers() {
    if (this.users.length) {
      return observableOf(this.users);
    } else {

      return this.http.get('https://randomuser.me/api/?results=20&?seed=foobar')
      .pipe(
        map((data: any) => data.results),
        tap(users => this.users = users),
      );
    }
  }

  getUser(index) {
    if (!this.users[index]) {
      return this.getUsers()
      .pipe(
        map(users => this.users[index])
      );
    } else {
      return observableOf(this.users[index]);
    }
  }
}
