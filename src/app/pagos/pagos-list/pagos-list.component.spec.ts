import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosListComponent } from './pagos-list.component';

describe('PagosListComponent', () => {
  let component: PagosListComponent;
  let fixture: ComponentFixture<PagosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosListComponent]
    });
    fixture = TestBed.createComponent(PagosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
