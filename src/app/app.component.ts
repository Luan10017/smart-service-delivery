import { AuthService } from './view/login/auth.service';
import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-service';

  mostrarMenu: boolean = false

  constructor(private authService :AuthService) {}

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  /* ngAfterViewInit(){
    const el = document.getElementById("sidebar-wrapper");
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton?.addEventListener("click", ()=> {
      el?.classList.toggle("toggled")
    })

  } */

}
