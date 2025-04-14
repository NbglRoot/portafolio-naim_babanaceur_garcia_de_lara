import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificatesSectionComponent } from './skills-certificates-section.component';

describe('SkillsCertificatesSectionComponent', () => {
  let component: SkillsCertificatesSectionComponent;
  let fixture: ComponentFixture<SkillsCertificatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCertificatesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCertificatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
