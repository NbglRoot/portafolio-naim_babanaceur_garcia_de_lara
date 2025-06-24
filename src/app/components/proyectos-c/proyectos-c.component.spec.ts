import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCComponent } from './proyectos-c.component';

describe('ProyectosCComponent', () => {
  let component: ProyectosCComponent;
  let fixture: ComponentFixture<ProyectosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
