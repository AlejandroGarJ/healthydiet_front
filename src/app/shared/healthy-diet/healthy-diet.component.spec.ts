import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyDietComponent } from './healthy-diet.component';

describe('HealthyDietComponent', () => {
  let component: HealthyDietComponent;
  let fixture: ComponentFixture<HealthyDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthyDietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthyDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
