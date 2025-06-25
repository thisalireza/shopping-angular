import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacCategoryCarouselComponent } from './mac-category-carousel.component';

describe('MacCategoryCarouselComponent', () => {
  let component: MacCategoryCarouselComponent;
  let fixture: ComponentFixture<MacCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacCategoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
