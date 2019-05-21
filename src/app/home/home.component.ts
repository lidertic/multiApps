import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../_services';
import { Missatge } from '../_services/model/missatges';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  points = 1;
  messages: any[] = [];
  subscription: Subscription;
  message: Missatge;

  constructor(
    private messageService: MessageService,
    private data: MessageService,
    private sesio: AuthService
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

    // TODO: cercar exemples on posen fiter per filtrar tipus de missatges!!
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      // if (message.tipus === 'usuari' && message.getObjectAtribut('actiu')) {
      //   this.sesio.isLoggedIn = true;
      // } else {
      //   this.sesio.isLoggedIn = false;
      // }
    });
  }

  ngOnInit() {}

  newMessage() {
    this.data.changeMessage(new Missatge('comunicacio', { nom: 'Root' }));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
