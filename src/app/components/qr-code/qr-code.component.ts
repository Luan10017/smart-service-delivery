import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';

import { QrScannerComponent } from 'angular2-qrscanner';
import { AuthService } from 'src/app/view/login/auth.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QrCodeComponent implements OnInit {

  usuario: any = {
    name: ""
  }

  constructor(private authService: AuthService) { }


  @ViewChild(QrScannerComponent, { static: false })
  qrScannerComponent!: QrScannerComponent;
  ngOnInit(): void {
   
  }


  ngAfterViewInit(): void {
   
  }

  readQRCodeTable(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.authService.selectTable(result, this.usuario.name)
      console.log(result, this.usuario.name);
    });
  }
}
