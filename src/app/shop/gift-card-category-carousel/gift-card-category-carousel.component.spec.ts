import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardCategoryCarouselComponent } from './gift-card-category-carousel.component';

describe('AppleIdCategoryCarouselComponent', () => {
  let component: GiftCardCategoryCarouselComponent;
  let fixture: ComponentFixture<GiftCardCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftCardCategoryCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
