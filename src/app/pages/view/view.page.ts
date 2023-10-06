import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Inicializa Cloud Firestore.
  db = getFirestore(this.app);

  // Controla a visualização da página.
  view = false;

  // Dependência de 'ActivatedRoute' → Roteamento interno.
  activatedRoute = inject(ActivatedRoute);

  // Obtém id da rota.
  docId = this.activatedRoute.snapshot.paramMap.get('id') as string;

  // Referências ao documento.
  docRef = doc(this.db, environment.dbCollection, this.docId);

  // View dos documentos → html.
  docView: any;

  constructor() { }

  ngOnInit() {

    // Se usuário não está logado, mostra login.
    onAuthStateChanged(this.auth, (userData) => {
      if (!userData) location.href = '/login';
    });

  }

}
