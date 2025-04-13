import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTopPageComponent } from './arrow-top-page.component';

describe('ArrowTopPageComponent', () => {
  let component: ArrowTopPageComponent;
  let fixture: ComponentFixture<ArrowTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowTopPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
