import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Missatge } from 'src/app/_services/model/missatges';
import { MessageService } from 'src/app/_services';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('collapseTrigger', [
      state(
        'open',
        style({
          opacity: '1',
          display: 'block',
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'closed',
        style({
          opacity: '0',
          display: 'none',
          transform: 'translate3d(0, -100%, 0)'
        })
      ),
      transition('open => closed', [animate('400ms ease-out')]),
      transition('closed => open', [animate('100ms ease-in')])
      //transition('closed => open', animate('100ms ease-in')),
      //transition('open => closed', animate('400ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {
  _sesio: boolean;
  message: Missatge;
  show: boolean = false;
  collapse: string = 'closed';

  constructor(
    private sessio: AuthService,
    private data: MessageService,
    private router: Router
  ) {
    this._sesio = this.sessio.isLoggedIn;

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
  }

  ngOnInit() {}

  toggleCollapse() {
    //this.show = !this.show;
    this.collapse = this.collapse === 'open' ? 'closed' : 'open';
  }

  logout() {
    localStorage.removeItem('validUserMultiapps');
    this.data.changeMessage(new Missatge('usuari', { actiu: false }));
    this.sessio.logout();
    this.router.navigate(['/login']);
  }
}
