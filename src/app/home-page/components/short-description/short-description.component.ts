import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'home-page-short-description',
  templateUrl: './short-description.component.html',
  styleUrls: ['./short-description.component.css']
})
export class ShortDescriptionComponent implements OnInit{
  @ViewChild('descriptionImage') descriptionImage!: ElementRef;
  constructor(
    private renderer: Renderer2
  ){
    
  }
  ngOnInit(): void {

    // set behaivor of items when scrolling (position)
    this.renderer.listen(window, 'scroll', ()=>{

      let position = this.descriptionImage.nativeElement.getBoundingClientRect().top;
      let screenHeight = (window.innerHeight/.2);

      if(position < screenHeight){
        this.renderer.setStyle(this.descriptionImage.nativeElement, 'top', 0)
      }

      if(window.scrollY == 0){
        this.renderer.setStyle(this.descriptionImage.nativeElement, 'top', '15rem')
      }

    })
  }

}
