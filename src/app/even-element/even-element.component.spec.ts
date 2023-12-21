import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenElementComponent } from './even-element.component';

describe('EvenElementComponent', () => {
  let component: EvenElementComponent;
  let fixture: ComponentFixture<EvenElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvenElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
