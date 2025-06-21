import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingProdcutsComponent } from './rating-prodcuts.component';

describe('RatingProdcutsComponent', () => {
  let component: RatingProdcutsComponent;
  let fixture: ComponentFixture<RatingProdcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingProdcutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
