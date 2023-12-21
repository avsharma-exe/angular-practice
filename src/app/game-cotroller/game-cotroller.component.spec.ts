import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCotrollerComponent } from './game-cotroller.component';

describe('GameCotrollerComponent', () => {
  let component: GameCotrollerComponent;
  let fixture: ComponentFixture<GameCotrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCotrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCotrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
