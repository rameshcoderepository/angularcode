import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-parent',
  template: `
    <h2>Parent Component</h2>
    <p>Counter Value: {{ counterValue }}</p>
    <app-counter-child
      [initialValue]="counterValue"
      (counterChange)="onCounterChange($event)"
    ></app-counter-child>

    <div>
    <h2>Greeting Form</h2>
    <app-greeting-form></app-greeting-form>
  </div>
  
  `,
})
export class CounterParentComponent {
  counterValue = 0;

  onCounterChange(newValue: number):void {
    this.counterValue = newValue;
  }
}

// onCounterChange This method is called when the counterChange event is emitted by the child component and passed back to the parent. The newValue parameter holds the updated value of the child component's counter, and it's used to update the counterValue variable in the parent component. With this update, the parent component's view will be automatically updated to reflect the new counter value.
