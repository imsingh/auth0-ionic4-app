import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { AuthService } from '../services/auth/auth.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  person: any;
  constructor(private dataService: DataService, private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.dataService.getPerson(params.get('id')))
    ).subscribe(person => {
      this.person = person;
    });
  }

}
