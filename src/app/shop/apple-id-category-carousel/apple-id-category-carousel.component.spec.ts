import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleIdCategoryCarouselComponent } from './apple-id-category-carousel.component';

describe('AppleIdCategoryCarouselComponent', () => {
  let component: AppleIdCategoryCarouselComponent;
  let fixture: ComponentFixture<AppleIdCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleIdCategoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleIdCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
