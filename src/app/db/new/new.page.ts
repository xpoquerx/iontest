import { Component, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  // Firebase.
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  db = getFirestore(this.app);
  storage = getStorage(this.app);


  constructor() { }

  ngOnInit() {
  }

}
