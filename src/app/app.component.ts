import { Component, OnDestroy } from '@angular/core';

import { MessageService } from './_services';
import { Subscription } from 'rxjs';
import { Missatge } from './_services/model/missatges';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Main Application';
  points = 1;
  messages: any[] = [];
  subscription: Subscription;
  message: Missatge;
  _sesio: boolean;

  constructor(
    //private messageService: MessageService,
    private data: MessageService,
    private sessio: AuthService
  ) {
    // this.subscription = this.messageService.getMessage().subscribe(message => {
    //   if (message) {
    //     this.messages.push(message);
    //   } else {
    //     this.messages = [];
    //   }
    // });

    this.data.currentMessage
      .pipe(
        filter(data => {
          return data.tipus === 'usuari' || data.tipus === 'Inicial';
        })
      )
      .subscribe(message => {
        this.message = message;
        const user = JSON.parse(localStorage.getItem('validUserMultiapps'));
        if (user) {
          this._sesio = true;
        } else {
          if (message.getObjecte() && message.getObjectAtribut('actiu')) {
            this._sesio = true;
          } else {
            this._sesio = false;
          }
        }
      });

    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }

  newMessage() {
    this.data.changeMessage(new Missatge('comunicacio', { nom: 'Root' }));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
