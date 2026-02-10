import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>{{ title }}</h1>
    <p>This is a basic Angular application.</p>

    <!-- <p>{{ hiddenFromTempate }}</p> -->
    <p>{{ accessibleFromTemplate }}</p>
    <p>{{ alsoAccessibleFromTemplate }}</p>

    <h2>Number</h2>
    <p>{{2 + 5}}</p>

    <p>{{ a }} + {{ b }} = {{a + b}}</p>

    <p>Add 2 numbers -> {{ add(12, 90) }}</p>

    @for (item of myArray; track $index) {
      <p>{{ item }}</p>
    }

    <p>Map value for 'two': {{ myMap.get('two') }}</p>

    @for (item of myMap; track $index) {
      <p>{{ item[0] }}: {{ item[1] }}</p>
    }

    <button (click)="inc()">Click me</button> {{ cnt }}
  `,
})
export class App {
  protected readonly title = "Hello Angular!";

  private hiddenFromTempate = "This is a private property and cannot be accessed from the template.";
  protected accessibleFromTemplate = "This is a protected property and can be accessed from the template.";
  public alsoAccessibleFromTemplate = "This is a public property and can be accessed from the template.";

  protected a = 12;
  protected b = 8;

  protected add(x: number, y: number): number {
    return x + y;
  }

  protected myArray = [1,5,3,8,2];

  protected myMap = new Map<string, number>([
    ['one', 1],
    ['two', 2],
    ['three', 3]
  ]);

  protected cnt = 1;
  inc(): void {
    this.cnt++;
  }
}
