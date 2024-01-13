import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChildren('link') links!: QueryList<ElementRef>;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('navSection', {static:true}) navSection!: ElementRef;
  @ViewChild('menuIcon', {static:true}) menuIcon!:ElementRef;
  @ViewChild('mainImage', {static:true}) mainImage!:ElementRef;

  constructor(

    private renderer: Renderer2

  ){
    
  }

  ngOnInit(): void {

   this.showAndHideHeader();

   this.renderer.listen(this.menuIcon.nativeElement, 'click', ()=>{

    if(this.navSection.nativeElement.classList.contains('nav-section-show')){
      this.renderer.removeClass(this.navSection.nativeElement, 'nav-section-show')
    }
    
    else{
      this.renderer.addClass(this.navSection.nativeElement, 'nav-section-show')
    }

   });

  }

  showAndHideHeader(){

    this.renderer.listen(window, 'scroll', ()=>{

      // When the scroll is greater than 0, the header is displayed
      if(window.scrollY>0){

        this.renderer.setStyle(this.header.nativeElement,'background-color', 'white');
        this.renderer.setAttribute(this.mainImage.nativeElement, 'src', '/assets/icons/logo/MORADO V1.png');
        this.renderer.setStyle(this.menuIcon.nativeElement, 'filter', 'invert(0)');
        this.renderer.setStyle(this.header.nativeElement, 'box-shadow', 'rgba(149, 157, 165, 0.2) 0px 8px 24px');
        this.links.forEach(e=>{
          this.renderer.setStyle(e.nativeElement, 'color', 'black');
        });
      }
      
      else 
      
      // When the scroll is 0, the header is hidden
      if(window.scrollY==0){
        this.renderer.setAttribute(this.mainImage.nativeElement, 'src', '/assets/icons/logo/logo blanco.png');
        this.renderer.setStyle(this.menuIcon.nativeElement, 'filter', 'invert(1)');
        this.renderer.removeStyle(this.header.nativeElement, 'background-color');
        this.renderer.removeStyle(this.header.nativeElement, 'box-shadow');
        this.links.forEach(e=>{
          this.renderer.setStyle(e.nativeElement, 'color', 'white');
        });

      }

    });

  }

}
