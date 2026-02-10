import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title() }}</h1>
    <p>This is a basic Angular application.</p>
  `,
})
export class App {
  protected readonly title = signal('02-signals');
}
