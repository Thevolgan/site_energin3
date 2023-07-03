import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerStationComponent } from './charger-station.component';

describe('ChargerStationComponent', () => {
  let component: ChargerStationComponent;
  let fixture: ComponentFixture<ChargerStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargerStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargerStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
