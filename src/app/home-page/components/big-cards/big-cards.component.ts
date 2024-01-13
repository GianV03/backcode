import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-page-big-cards',
  templateUrl: './big-cards.component.html',
  styleUrls: ['./big-cards.component.css']
})
export class BigCardsComponent implements OnInit, AfterViewInit{

  @ViewChildren('card') cards!: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2
  ){

  }

  ngAfterViewInit(): void {

    // Set the behavior of the cards with the window scroll
    this.renderer.listen(window, 'scroll', ()=>{

      this.cards.forEach((e, i)=>{

        let position = e.nativeElement.getBoundingClientRect().top;
        let screenHeight = window.innerHeight/2;

        // When the view reaches the card it slides and is displayed
        if(position < screenHeight){
          if(i % 2 === 0){
            this.renderer.setStyle(e.nativeElement,'left', 0);
          }else{
            this.renderer.setStyle(e.nativeElement,'right', 0);
          }
        }

        // when the view is higher than the card it slides and hides
        if(position > screenHeight){
          if(i % 2 === 0){
            this.renderer.setStyle(e.nativeElement,'left', '-300px');
          }else{
            this.renderer.setStyle(e.nativeElement,'right', '-300px');
          }
        }

      });

    });
  }
  ngOnInit(): void {

  }

}











// this.renderer.listen(window, 'scroll',()=>{
//   if(window.scrollY>=440){
//     this.cards.forEach((e, i)=>{
//       if(i == 0){
//         this.renderer.setStyle(e.nativeElement,'left', 0);
//       }else if(i==1){
//         this.renderer.setStyle(e.nativeElement,'right', 0);
//       }
//     })
//   }else{
//     if(window.scrollY<440){
//       this.cards.forEach((e, i)=>{
//         if(i == 0){
//           this.renderer.setStyle(e.nativeElement,'left', '-300px');
//         }else if(i == 1){
//           this.renderer.setStyle(e.nativeElement,'right', '-300px');
//         }
//       })
//     }
//   }
//   if(window.scrollY>=1050){
//     this.cards.forEach((e, i)=>{
//       if(i == 2){
//         this.renderer.setStyle(e.nativeElement,'left', 0);
//       }else if(i ==3){
//         this.renderer.setStyle(e.nativeElement,'right', 0);
//       }
//     })
//   }else{
//     if(window.scrollY<1050){
//       this.cards.forEach((e, i)=>{
//         if(i == 2){
//           this.renderer.setStyle(e.nativeElement,'left', '-300px');
//         }else if(i== 3){
//           this.renderer.setStyle(e.nativeElement,'right', '-300px');
//         }
//       })
//     }
//   }
// })
