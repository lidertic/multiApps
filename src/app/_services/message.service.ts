import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Missatge } from './model/missatges';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subject = new Subject<any>();
  private messageSource = new BehaviorSubject<Missatge>(
    new Missatge('Inicial', null)
  );

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

  changeMessage(message: Missatge) {
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
