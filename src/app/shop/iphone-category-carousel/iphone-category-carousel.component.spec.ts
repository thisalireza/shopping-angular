import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneCategoryCarouselComponent } from './iphone-category-carousel.component';

describe('IphoneCategoryCarouselComponent', () => {
  let component: IphoneCategoryCarouselComponent;
  let fixture: ComponentFixture<IphoneCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IphoneCategoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IphoneCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
