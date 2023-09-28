import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementComponent } from './engagement.component';

describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EngagementComponent]
    });
    fixture = TestBed.createComponent(EngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
