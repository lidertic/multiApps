import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Missatge } from 'src/app/_services/model/missatges';
import { MessageService } from 'src/app/_services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  _sesio: boolean;
  message: Missatge;

  constructor(private sessio: AuthService, private data: MessageService) {
    this._sesio = this.sessio.isLoggedIn;

    this.data.currentMessage.subscribe(message => {
      this.message = message;
      if (message.tipus === 'usuari' && message.getObjectAtribut('actiu')) {
        this._sesio = true;
      } else {
        this._sesio = false;
      }
    });
  }

  ngOnInit() {}
}
