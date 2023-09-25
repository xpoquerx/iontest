import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'mail' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Autores', url: 'author', icon: 'people' },
    { title: 'Privacidade', url: 'policies', icon: 'lock-closed' }    
  ];

  constructor() { }
}
