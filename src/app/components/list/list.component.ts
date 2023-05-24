import { Component } from '@angular/core';
import { state$ } from '@app/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  state2$ = state$;
}
