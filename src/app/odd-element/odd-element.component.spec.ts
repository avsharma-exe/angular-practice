import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddElementComponent } from './odd-element.component';

describe('OddElementComponent', () => {
  let component: OddElementComponent;
  let fixture: ComponentFixture<OddElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OddElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OddElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
