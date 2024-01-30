import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMoreDownloadedComponent } from './game-more-downloaded.component';

describe('GameMoreDownloadedComponent', () => {
  let component: GameMoreDownloadedComponent;
  let fixture: ComponentFixture<GameMoreDownloadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameMoreDownloadedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameMoreDownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
