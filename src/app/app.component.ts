import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'smart-service';

  ngAfterViewInit(){
    const el = document.getElementById("sidebar-wrapper");
    const toggleButton = document.getElementById("menu-toggle");

    toggleButton?.addEventListener("click", ()=> {
      el?.classList.toggle("toggled")
    })

  }

}
