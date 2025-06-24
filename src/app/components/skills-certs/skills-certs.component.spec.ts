import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertsComponent } from './skills-certs.component';

describe('SkillsCertsComponent', () => {
  let component: SkillsCertsComponent;
  let fixture: ComponentFixture<SkillsCertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
