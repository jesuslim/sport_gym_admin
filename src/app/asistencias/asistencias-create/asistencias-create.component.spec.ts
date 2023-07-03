import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasCreateComponent } from './asistencias-create.component';

describe('AsistenciasCreateComponent', () => {
  let component: AsistenciasCreateComponent;
  let fixture: ComponentFixture<AsistenciasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasCreateComponent]
    });
    fixture = TestBed.createComponent(AsistenciasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
