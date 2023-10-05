import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCommunityComponent } from './first-community.component';

describe('FirstCommunityComponent', () => {
  let component: FirstCommunityComponent;
  let fixture: ComponentFixture<FirstCommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstCommunityComponent]
    });
    fixture = TestBed.createComponent(FirstCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
