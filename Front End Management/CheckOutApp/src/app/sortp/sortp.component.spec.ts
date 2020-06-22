import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortpComponent } from './sortp.component';

describe('SortpComponent', () => {
  let component: SortpComponent;
  let fixture: ComponentFixture<SortpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
