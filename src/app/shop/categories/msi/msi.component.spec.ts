import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiComponent } from './msi.component';

describe('MsiComponent', () => {
  let component: MsiComponent;
  let fixture: ComponentFixture<MsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
