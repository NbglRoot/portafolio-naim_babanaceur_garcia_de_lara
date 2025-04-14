import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNgdlComponent } from './about-ngdl.component';

describe('AboutNgdlComponent', () => {
  let component: AboutNgdlComponent;
  let fixture: ComponentFixture<AboutNgdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNgdlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNgdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
