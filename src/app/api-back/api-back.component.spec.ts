import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBackComponent } from './api-back.component';

describe('ApiBackComponent', () => {
  let component: ApiBackComponent;
  let fixture: ComponentFixture<ApiBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
