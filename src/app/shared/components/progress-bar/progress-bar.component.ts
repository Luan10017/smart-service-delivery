import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ul = document.querySelector("ul")
    const progressElementes = document.querySelectorAll(".MYprogress")


    ul?.addEventListener("click", (event) => {
      
      console.log(event.target)
    } )
    

    console.log(progressElementes[0].classList)
  }

}
