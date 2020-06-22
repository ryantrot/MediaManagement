import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortfComponent } from './sortf.component';

describe('SortfComponent', () => {
  let component: SortfComponent;
  let fixture: ComponentFixture<SortfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
