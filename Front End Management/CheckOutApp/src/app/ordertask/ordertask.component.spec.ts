import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertaskComponent } from './ordertask.component';

describe('OrdertaskComponent', () => {
  let component: OrdertaskComponent;
  let fixture: ComponentFixture<OrdertaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdertaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
