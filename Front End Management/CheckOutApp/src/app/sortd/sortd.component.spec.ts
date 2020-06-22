import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortdComponent } from './sortd.component';

describe('SortdComponent', () => {
  let component: SortdComponent;
  let fixture: ComponentFixture<SortdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
