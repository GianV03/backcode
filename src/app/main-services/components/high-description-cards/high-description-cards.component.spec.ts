import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighDescriptionCardsComponent } from './high-description-cards.component';

describe('HighDescriptionCardsComponent', () => {
  let component: HighDescriptionCardsComponent;
  let fixture: ComponentFixture<HighDescriptionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighDescriptionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighDescriptionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
