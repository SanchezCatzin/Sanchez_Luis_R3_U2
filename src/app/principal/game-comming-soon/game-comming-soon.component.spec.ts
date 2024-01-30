import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComingSoonComponent } from './game-comming-soon.component';

describe('GameComingSoonComponent', () => {
  let component: GameComingSoonComponent;
  let fixture: ComponentFixture<GameComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComingSoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
