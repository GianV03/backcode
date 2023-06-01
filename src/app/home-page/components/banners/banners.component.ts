import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-page-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit, AfterViewInit{
  @ViewChildren('serviceImage') serviceImage!:QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2
  ){

  }
  ngAfterViewInit(){
    this.serviceImage.forEach(e=>{
      this.renderer.listen(e.nativeElement, 'mouseover', ()=>{
        this.renderer.setStyle(e.nativeElement, 'transform', 'scale(1.2)')
      })
      this.renderer.listen(e.nativeElement, 'mouseout', ()=>{
        this.renderer.setStyle(e.nativeElement, 'transform', 'scale(1)')
      });
    });
  }

  ngOnInit(): void {

  }

  
}
