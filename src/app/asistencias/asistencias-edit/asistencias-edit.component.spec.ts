import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasEditComponent } from './asistencias-edit.component';

describe('AsistenciasEditComponent', () => {
  let component: AsistenciasEditComponent;
  let fixture: ComponentFixture<AsistenciasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciasEditComponent]
    });
    fixture = TestBed.createComponent(AsistenciasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
