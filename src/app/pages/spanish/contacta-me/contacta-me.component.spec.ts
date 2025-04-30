import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaMeComponent } from './contacta-me.component';

describe('ContactaMeComponent', () => {
  let component: ContactaMeComponent;
  let fixture: ComponentFixture<ContactaMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactaMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactaMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
