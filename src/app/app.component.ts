import { Component } from '@angular/core';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-app';

  constructor() {

    const key$=fromEvent(document,'keyup')
      .pipe(
        tap((keyup:KeyboardEvent) => console.log('From Observable',keyup))
      );

    key$.subscribe(
      data => console.log('From Consumer ',data)
    )
  }
}
