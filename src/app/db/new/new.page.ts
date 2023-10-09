import { Component, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  // Firebase.
  app = initializeApp(environment.firebase);
  storage = getStorage(this.app);


  constructor() { }

  ngOnInit() {
  }

}
