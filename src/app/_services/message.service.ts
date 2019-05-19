import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class MessageService {
  private subject = new Subject<any>();
  private messageSource = new BehaviorSubject("default message");

  currentMessage = this.messageSource.asObservable();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable()
// export class DataService {

//   private messageSource = new BehaviorSubject('default message');
//   currentMessage = this.messageSource.asObservable();

//   constructor() { }

//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }

// }
