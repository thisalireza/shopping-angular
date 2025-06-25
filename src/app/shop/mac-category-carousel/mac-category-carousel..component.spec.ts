import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsCarouselComponent } from './mac-category-carousel.component';

describe('NewProductsCarouselComponent', () => {
  let component: NewProductsCarouselComponent;
  let fixture: ComponentFixture<NewProductsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
