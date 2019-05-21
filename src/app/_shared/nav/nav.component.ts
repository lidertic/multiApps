import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Missatge } from 'src/app/_services/model/missatges';
import { MessageService } from 'src/app/_services';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  _sesio: boolean;
  message: Missatge;

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
        let user = JSON.parse(localStorage.getItem('validUserMultiapps'));
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

  logout() {
    localStorage.removeItem('validUserMultiapps');
    this.data.changeMessage(new Missatge('usuari', { actiu: false }));
    this.sessio.logout();
    this.router.navigate(['/login']);
  }
}
