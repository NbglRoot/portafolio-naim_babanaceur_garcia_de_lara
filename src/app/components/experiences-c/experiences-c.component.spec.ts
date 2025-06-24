import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesCComponent } from './experiences-c.component';

describe('ExperiencesCComponent', () => {
  let component: ExperiencesCComponent;
  let fixture: ComponentFixture<ExperiencesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
