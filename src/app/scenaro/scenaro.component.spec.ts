import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaroComponent } from './scenaro.component';

describe('ScenaroComponent', () => {
  let component: ScenaroComponent;
  let fixture: ComponentFixture<ScenaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
