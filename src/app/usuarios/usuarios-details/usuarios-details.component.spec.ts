import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetailsComponent } from './usuarios-details.component';

describe('UsuariosDetailsComponent', () => {
  let component: UsuariosDetailsComponent;
  let fixture: ComponentFixture<UsuariosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosDetailsComponent]
    });
    fixture = TestBed.createComponent(UsuariosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
