import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth: ElementRef | null = null;;
  @ViewChild('ageInput') age!: ElementRef;
  @ViewChild(DemoComponent, {static: true}) demoComp: DemoComponent| null = null;;

  calculateAge(){
    if (this.dateOfBirth && this.dateOfBirth.nativeElement.value) {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
    }
  }
}
