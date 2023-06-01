import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'home-page-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChildren('projectItem') projectItems!: QueryList<ElementRef>;
  
  constructor(
    private renderer: Renderer2
  ){

  }

  ngAfterViewInit(): void {
    this.renderer.listen(window, 'scroll', ()=>{
      this.projectItems.forEach((e)=>{
        let position = e.nativeElement.getBoundingClientRect().top;
        let screenHeight = window.innerHeight-60;
        if(position < screenHeight){
          this.renderer.setStyle(e.nativeElement, 'opacity', 1);
        }else if(position > screenHeight){
          this.renderer.setStyle(e.nativeElement, 'opacity', 0);
        }
      })
    })
  }
}
