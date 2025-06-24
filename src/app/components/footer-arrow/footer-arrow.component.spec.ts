import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterArrowComponent } from './footer-arrow.component';

describe('FooterArrowComponent', () => {
  let component: FooterArrowComponent;
  let fixture: ComponentFixture<FooterArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
