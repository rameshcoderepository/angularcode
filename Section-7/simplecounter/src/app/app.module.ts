import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterChildComponent } from './counter-child/counter-child.component';
import { GreetingFormComponent } from './greeting-form/greeting-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterParentComponent,
    CounterChildComponent,
    GreetingFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
