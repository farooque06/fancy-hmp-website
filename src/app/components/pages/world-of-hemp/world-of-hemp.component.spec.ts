import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldOfHempComponent } from './world-of-hemp.component';

describe('WorldOfHempComponent', () => {
  let component: WorldOfHempComponent;
  let fixture: ComponentFixture<WorldOfHempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldOfHempComponent]
    });
    fixture = TestBed.createComponent(WorldOfHempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
