import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/_services";

@Component({
  selector: "app-view2",
  templateUrl: "./view2.component.html",
  styleUrls: ["./view2.component.css"]
})
export class View2Component implements OnInit {
  message: string;

  constructor(private data: MessageService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling");
  }
}
