import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const progressElementes = document.querySelectorAll(".MYprogress")

    for (let i=0; i < progressElementes.length; i++) {
      progressElementes[i].addEventListener("click", () => {
        this.clickInteracional(i,progressElementes)
      })
    }
  }

  clickInteracional(index:any, progressElementes:any){
    for (let i=0; i <= index; i++) {
      progressElementes[i].classList.add("active")
    }
  }

}
