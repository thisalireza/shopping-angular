import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerProductComponent } from './inner-product.component';

describe('InnerProductComponent', () => {
  let component: InnerProductComponent;
  let fixture: ComponentFixture<InnerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
