import { Component, computed, effect, linkedSignal, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title() }}</h1>
    <p>This is a basic Angular application.</p>

    <p>Counter: {{ num() }}</p>
    <p>Multiply by two: {{ multiplyByTwo() }}</p>

    <button (click)="incA(3)">A +3</button>
    <button (click)="incB(2)">B +2</button>
    <p>Sum of {{ valA() }} and {{ valB() }} = {{ sum() }}</p>

    Sum only tracking valA: {{ untrackedSum() }} <br /><br />
    <h2>Override value A with linkedSignal: {{ linkedSum() }} <br /><br /></h2>
    <input type="number" [value]="valA()" (input)="valA.set($any($event.target).valueAsNumber)" />

    <br /><br />
    Tiggered by effect: {{ msg() }}
  `,
})
export class App {
  protected readonly title = signal('02-signals');

  public num = signal(0);
  public multiplyByTwo = computed(() => this.num() * 2);

  protected valA = signal(3);
  protected valB = signal(4);
  protected sum = computed(() => this.valA() + this.valB());

  protected linkedSum = linkedSignal(() => this.valA() + this.valB());

  protected msg = signal('');

  protected untrackedSum = computed(() => {
    // untracked() allows us to read the value of valA and valB without creating a dependency on them
    const a = this.valA();
    const b = untracked(() => this.valB());
    return a + b;
  });

  constructor() {
    setInterval(() => {
      this.num.update((n) => n + 1);
    }, 1000);

    effect(() => {
      // Dev Tools Console will log the updated value of num whenever it changes
      console.log(`Counter updated: ${this.num()}`);
    });

    effect(() => {
      const sum = this.sum();
      this.msg.set(`The sum of ${this.valA()} and ${this.valB()} is ${sum}`);
    });
  }

  incA(by: number = 4) {
    this.valA.update((v) => v + 1);
  }

  incB(by: number = 1) {
    this.valB.update((v) => v + by);
  }
}
