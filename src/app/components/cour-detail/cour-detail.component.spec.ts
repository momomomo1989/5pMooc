import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourDetailComponent } from './cour-detail.component';

describe('CourDetailComponent', () => {
  let component: CourDetailComponent;
  let fixture: ComponentFixture<CourDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
