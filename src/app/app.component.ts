import { AuthService } from './core/services/auth.service';
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

  ngOnInit(){}

}
