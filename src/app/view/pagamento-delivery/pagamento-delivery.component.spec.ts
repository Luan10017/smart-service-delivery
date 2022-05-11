import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoDeliveryComponent } from './pagamento-delivery.component';

describe('PagamentoDeliveryComponent', () => {
  let component: PagamentoDeliveryComponent;
  let fixture: ComponentFixture<PagamentoDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
