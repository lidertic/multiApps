import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/_services";

@Component({
  selector: "app-view2",
  templateUrl: "./view2.component.html",
  styleUrls: ["./view2.component.css"]
})
export class View2Component implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage("Hello From App1 View 2");
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }

  showRootMessages(): void {
    // TODO: No funciona!!
    // ensenya les dades del subject del app root
    this.messageService.getMessage().subscribe(dades => {
      if (dades) {
        console.log(dades);
      }
    });
  }
}
