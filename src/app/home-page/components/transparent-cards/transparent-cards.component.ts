import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-page-transparent-cards',
  templateUrl: './transparent-cards.component.html',
  styleUrls: ['./transparent-cards.component.css']
})
export class TransparentCardsComponent implements AfterViewInit {


  @ViewChildren('card') cards!:QueryList<ElementRef>;

  constructor(
    private renderer:Renderer2
  ){

  }

  ngAfterViewInit(): void {
    this.renderer.listen(window, 'scroll', ()=>{
      this.cards.forEach((e)=>{
        let position = e.nativeElement.getBoundingClientRect().top;
        let screenHeight = window.innerHeight/2;
        if(position < screenHeight){
          this.renderer.setStyle(e.nativeElement, 'opacity', 1);
        }else if(position > screenHeight){
          this.renderer.setStyle(e.nativeElement, 'opacity', 0);
        }
      })
    })
  }

}
