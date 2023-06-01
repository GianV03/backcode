import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentCardsComponent } from './transparent-cards.component';

describe('TransparentCardsComponent', () => {
  let component: TransparentCardsComponent;
  let fixture: ComponentFixture<TransparentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparentCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
