import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadCategoryCarouselComponent } from './ipad-category-carousel.component';

describe('IpadCategoryCarouselComponent', () => {
  let component: IpadCategoryCarouselComponent;
  let fixture: ComponentFixture<IpadCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadCategoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpadCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
