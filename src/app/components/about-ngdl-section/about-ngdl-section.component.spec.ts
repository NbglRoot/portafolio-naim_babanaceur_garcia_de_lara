import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNgdlSectionComponent } from './about-ngdl-section.component';

describe('AboutNgdlSectionComponent', () => {
  let component: AboutNgdlSectionComponent;
  let fixture: ComponentFixture<AboutNgdlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNgdlSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNgdlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
