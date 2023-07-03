import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneamentComponent } from './saneament.component';

describe('SaneamentComponent', () => {
  let component: SaneamentComponent;
  let fixture: ComponentFixture<SaneamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaneamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaneamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
