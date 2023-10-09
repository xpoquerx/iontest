import { Component, OnInit } from '@angular/core';

// npm install @capacitor/camera
// https://ionicframework.com/docs/native/camera
import { Camera, CameraResultType } from '@capacitor/camera';

// npm install @capacitor/geolocation
// https://ionicframework.com/docs/native/geolocation
import { Geolocation } from '@capacitor/geolocation';

// npm install @capacitor/device
// https://ionicframework.com/docs/native/device
import { Device } from '@capacitor/device';

// npm install @capacitor/toast
// https://ionicframework.com/docs/native/toast
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  // Inicializa atributos.
  image: any;       // Armazena a imagem.
  photoFormat: any; // Formato da imagem.
  location: any;    // Geolocalização.

  // Informações sobre o dispositivo.
  devInfo: any;     // Informações gerais.
  devId: any;       // ID / IMEI.
  devBat: any;      // Status da bateria.
  devLang: any;     // Idioma.

  constructor() { }

  ngOnInit() {

    // Obtém informações sobre o dispositivo e envia para a view.
    Device.getInfo().then(x => this.devInfo = x);
    Device.getId().then(x => this.devId = x);
    Device.getBatteryInfo().then(x => this.devBat = x);
    Device.getLanguageTag().then(x => this.devLang = x);

  }

  /**
   * Obtém uma foto da API da câmera (Capacitor).
   * Referências: https://capacitorjs.com/docs/apis/camera
   **/
  getPhoto() {
    Camera.getPhoto({

      // Configurações da captura da imagem.
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl

    }).then(x => {

      // Envia para a view.
      this.image = x.dataUrl;
      this.photoFormat = x.format;

      // Obtém a geolocalização da imagem.
      this.getLocation();

      // Usando 'Toast' para confirmar a imagem.
      Toast.show({ text: 'Foto salva com sucesso!', });
    })
  }

  /**
   * Obtém a localização atual do dispositivo.
   * Referências: https://ionicframework.com/docs/native/geolocation
   */
  getLocation() {
    Geolocation.getCurrentPosition()
      .then(c => {

        // Envia para a view.
        this.location = c.coords;
      })
  }

}
