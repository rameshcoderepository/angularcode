import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-form',
  templateUrl: './greeting-form.component.html'
})
export class GreetingFormComponent implements OnInit {
  ngOnInit(): void {
   
  }

  constructor(){

  }
  greeting: string ="";

  displayGreeting(name: string): void {
    console.log(name);
    this.greeting = name ? `Hello, ${name}` : 'Please enter your name.';
  }
}
