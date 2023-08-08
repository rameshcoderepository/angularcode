import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent {

 @Output() sereverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
 @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  newServerName = '';
  newServerContent = '';

  onAddServer(){
    this.sereverCreated.emit({
      serverName:this.newServerName,
       serverContent: this.newServerContent
      });
  }

  onAddBluePrint(){
    this.bluePrintCreated.emit({
      serverName:this.newServerName,
       serverContent: this.newServerContent
      });
  }
  
}
