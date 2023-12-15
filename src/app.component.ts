import { Component, AfterContentInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-app',
  styleUrls: ["app.component.scss"],
  templateUrl: "./app.component.html",
  styles: [
  ]
})
export class AppComponent implements AfterContentInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private icon: MatIconModule,
  ) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() { }



}
