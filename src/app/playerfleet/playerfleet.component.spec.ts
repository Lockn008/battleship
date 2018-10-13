import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerfleetComponent } from './playerfleet.component';

describe('PlayerfleetComponent', () => {
  let component: PlayerfleetComponent;
  let fixture: ComponentFixture<PlayerfleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerfleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
