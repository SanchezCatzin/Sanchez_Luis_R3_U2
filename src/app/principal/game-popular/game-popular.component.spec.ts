import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePopularComponent } from './game-popular.component';

describe('GamePopularComponent', () => {
  let component: GamePopularComponent;
  let fixture: ComponentFixture<GamePopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
