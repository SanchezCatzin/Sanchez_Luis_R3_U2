import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCommingSoonComponent } from './game-comming-soon.component';

describe('GameCommingSoonComponent', () => {
  let component: GameCommingSoonComponent;
  let fixture: ComponentFixture<GameCommingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCommingSoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCommingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
