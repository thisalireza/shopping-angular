import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWatchCategoryCarouselComponent } from './apple-watch-category-carousel.component';

describe('AppleWatchCategoryCarouselComponent', () => {
  let component: AppleWatchCategoryCarouselComponent;
  let fixture: ComponentFixture<AppleWatchCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleWatchCategoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppleWatchCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
