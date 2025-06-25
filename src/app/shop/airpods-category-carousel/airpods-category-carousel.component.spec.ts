import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpodsCategoryCarouselComponent } from './airpods-category-carousel.component';

describe('AirpodCategoryCarouselComponent', () => {
  let component: AirpodsCategoryCarouselComponent;
  let fixture: ComponentFixture<AirpodsCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirpodsCategoryCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirpodsCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
