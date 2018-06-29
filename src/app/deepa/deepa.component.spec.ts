import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepaComponent } from './deepa.component';

describe('DeepaComponent', () => {
  let component: DeepaComponent;
  let fixture: ComponentFixture<DeepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
