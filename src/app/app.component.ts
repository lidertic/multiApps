import { Component, OnDestroy } from "@angular/core";

import { MessageService } from "./_services/index";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  title = "Main Application";
  points = 1;
  messages: any[] = [];
  subscription: Subscription;
  message: string;

  constructor(
    private messageService: MessageService,
    private data: MessageService
  ) {
    // subscribe to home component messages
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

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }

  newMessage() {
    this.data.changeMessage("Hello from From parent to all!!");
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
