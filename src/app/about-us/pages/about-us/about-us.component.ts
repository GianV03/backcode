import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {


  @ViewChild('aboutUsText') AboutUsText!: ElementRef;
  @ViewChild('aboutUsImage') AboutUsImage!: ElementRef;
  @ViewChildren('misionVision') misionVision!: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2
  ){

  }

  ngAfterViewInit(): void {
    
    // set behaivor of items when scrolling (opacity)
    this.renderer.listen(window, 'scroll', ()=>{

      let position = this.AboutUsText.nativeElement.getBoundingClientRect().top;
      let screenHeight = window.innerHeight/2;

      if(position < screenHeight){
        this.renderer.setStyle(this.AboutUsText.nativeElement, 'opacity', 1);
      }
      
      else 
      
      if(position > screenHeight){
        this.renderer.setStyle(this.AboutUsText.nativeElement, 'opacity', 0);
      }

    });

  }
}
