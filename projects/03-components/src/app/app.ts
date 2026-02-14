import { Component, signal } from '@angular/core';
import { FirstComponent } from './first-component/first-component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <app-first-component></app-first-component>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('03-components');
}
