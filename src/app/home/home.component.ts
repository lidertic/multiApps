import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  points = 1;
  messages: any[] = [];
  subscription: Subscription;
  message: string;

  constructor(
    private messageService: MessageService,
    private data: MessageService
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
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  ngOnInit() {}

  newMessage() {
    this.data.changeMessage('Hello from From parent to all!!');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
