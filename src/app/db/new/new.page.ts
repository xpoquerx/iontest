import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  image!: string;
  photoFormat!: string;
  location: any;

  constructor() { }

  ngOnInit() { }

  async getLocation() {
    Geolocation.getCurrentPosition()
    .then((x) => {
      // console.log(x.coords);
      this.location = x.coords
    });
  }

  /**
   * Obtém uma foto da API da câmera (Capacitor) quando clica no botão [ALTERAR].
   * Referências: https://capacitorjs.com/docs/apis/camera
   **/
  getPhoto() {
    Camera.getPhoto({                       // 'getPhoto()' é uma promise.
      quality: 90,                          // Qualidade da foto.
      allowEditing: true,                   // Pode editar a foto antes de salvar.
      resultType: CameraResultType.DataUrl  // Retorna o arquivo da câmera no formato 'BASE64' (jpg).
    }).then((x) => {                        // Obteve a foto com sucesso.
      this.image = x.dataUrl!;              // Obtém o BASE64 da foto.
      this.photoFormat = x.format;          // Obtém o formato da foto.
      this.getLocation();      
    })

  }

}
