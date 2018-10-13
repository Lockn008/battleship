import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyfleetComponent } from './enemyfleet.component';

describe('EnemyfleetComponent', () => {
  let component: EnemyfleetComponent;
  let fixture: ComponentFixture<EnemyfleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyfleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
