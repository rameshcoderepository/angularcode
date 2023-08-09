import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  template: `
    <h3>Child Component</h3>
    <button (click)="increment()">Increment</button>
    <p>Child Counter Value: {{ childCounterValue }}</p>
  `,
})
export class CounterChildComponent {
  @Input() initialValue = 0;
  @Output() counterChange = new EventEmitter<number>();

  childCounterValue = 0;

  ngOnInit() {
    this.childCounterValue = this.initialValue;
  }

  increment() {
    this.childCounterValue++;
    this.counterChange.emit(this.childCounterValue);
  }
}
