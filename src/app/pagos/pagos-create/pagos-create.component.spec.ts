import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosCreateComponent } from './pagos-create.component';

describe('PagosCreateComponent', () => {
  let component: PagosCreateComponent;
  let fixture: ComponentFixture<PagosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosCreateComponent]
    });
    fixture = TestBed.createComponent(PagosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
