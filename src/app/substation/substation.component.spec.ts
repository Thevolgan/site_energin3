import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationComponent } from './substation.component';

describe('SubstationComponent', () => {
  let component: SubstationComponent;
  let fixture: ComponentFixture<SubstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
