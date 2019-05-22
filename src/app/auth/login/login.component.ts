import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable, of } from 'rxjs';
import { catchError, map, takeWhile } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { MessageService } from 'src/app/_services';
import { Missatge } from 'src/app/_services/model/missatges';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  heroes: any[];
  //private handleError: HandleError;
  sessio: any;
  error: any;
  mostrarError: boolean = false;
  respostaServeiLogin: boolean = false;
  //private data: Observable<string>;
  private fruits: Array<string> = [];
  formLogin: FormGroup;

  error$: Observable<any>;
  errorPreavis$: Observable<any>;
  errorUsuari$: Observable<any>;
  viewError: HttpErrorResponse;
  errorCad: string;

  componentActive = true;
  showVersion = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private data: MessageService,
    private loginService: LoginService,
    private authService: AuthService
  ) {
    this.formLogin = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  onButtonClick(event: Event, username: string, password: string): void {
    console.log(`click-> ${username},${password}`);
    if (username === '1' || username === '2' || username === '3') {
      this.authService.isLoggedIn = true;
      let object = {
        username: username,
        actiu: true,
        tipus: 'usuari',
        token: 'sdsdasdsdsadsadsadsadsadsadasdsadsadsadasd'
      };
      this.data.changeMessage(new Missatge('usuari', object));
      localStorage.setItem('validUserMultiapps', JSON.stringify(object));
      if (username === '1') {
        this.router.navigate(['/home']);
      } else if (username === '2') {
        this.router.navigate(['/app2']);
      } else if (username === '3') {
        this.router.navigate(['/app1']);
      }
    }
  }

  onkeyUp(event: Event, username: string, password: string): void {
    this.onButtonClick(null, username, password);
  }

  canviIdioma(idioma: string): void {}

  ngOnDestroy() {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (
      event.getModifierState &&
      event.getModifierState('Control') &&
      event.getModifierState('Alt') &&
      event.code === 'KeyY'
    ) {
      this.showVersion = !this.showVersion;
    }
  }
}
