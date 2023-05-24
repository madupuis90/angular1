import { Component, OnInit } from '@angular/core';
import { state$ } from '@app/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    state$.subscribe((state: any) => console.log(state))
  }
  title = 'angular-app1';
}
