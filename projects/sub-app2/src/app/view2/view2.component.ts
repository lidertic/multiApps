import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/_services';
import { Missatge } from 'src/app/_services/model/missatges';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  message: Missatge;

  constructor(private data: MessageService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  newMessage() {
    this.data.changeMessage(
      new Missatge('comunicacio', { nom: 'app2 view 2' })
    );
  }
}
