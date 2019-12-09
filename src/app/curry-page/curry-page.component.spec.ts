import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryPageComponent } from './curry-page.component';

describe('CurryPageComponent', () => {
  let component: CurryPageComponent;
  let fixture: ComponentFixture<CurryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
