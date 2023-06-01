import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardsComponent } from './big-cards.component';

describe('BigCardsComponent', () => {
  let component: BigCardsComponent;
  let fixture: ComponentFixture<BigCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
