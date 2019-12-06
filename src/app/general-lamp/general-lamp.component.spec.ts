import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLampComponent } from './general-lamp.component';

describe('GeneralLampComponent', () => {
  let component: GeneralLampComponent;
  let fixture: ComponentFixture<GeneralLampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
