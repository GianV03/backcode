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
    this.renderer.listen(window, 'scroll', ()=>{
      let position = this.AboutUsText.nativeElement.getBoundingClientRect().top;
      let screenHeight = window.innerHeight/2;
      if(position < screenHeight){
        this.renderer.setStyle(this.AboutUsText.nativeElement, 'opacity', 1);
        this.renderer.setStyle(this.AboutUsImage.nativeElement, 'transform', 'rotate3d(1, 1, 1, 0)')
      }else if(position > screenHeight){
        this.renderer.setStyle(this.AboutUsText.nativeElement, 'opacity', 0)
        this.renderer.setStyle(this.AboutUsImage.nativeElement, 'transform', 'rotate3d(1, 1, 1, 50deg)')
      }
    });

    // this.renderer.listen(window, 'scroll', ()=>{
    //   this.misionVision.forEach((e)=>{
    //     let position = e.nativeElement.getBoundingClientRect().top;
    //     let screenHeight = window.innerHeight/2;
    //     if(position < screenHeight){
    //       this.renderer.setStyle(e.nativeElement, 'top', 0);
    //     }else if(position >= screenHeight){
    //       this.renderer.setStyle(e.nativeElement, 'top', '-20rem');
    //     }
    //   })
    // })
  }

}
