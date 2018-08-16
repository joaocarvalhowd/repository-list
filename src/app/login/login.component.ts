import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private urlGithub = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${environment.clientId}`;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(): void {
    const options = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,width=500,height=500`;

    const authWindow = window.open(this.urlGithub, '_blank', options);

    const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
    const eventer = window[eventMethod];
    const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

    eventer(messageEvent, (msg) => {
      if (msg.data.payload) {
        try {
          localStorage.setItem('token', msg.data.payload);

          this.router.navigate(['/']);
        } catch (e) {
          console.log(msg.data.payload);
        }
        finally {
          authWindow.close();
        }
      } else {
        authWindow.close();
        console.log('Unauthorised');
      }
    }, false);
  }
}
