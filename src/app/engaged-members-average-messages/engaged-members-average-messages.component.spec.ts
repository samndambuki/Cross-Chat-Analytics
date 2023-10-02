import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagedMembersAverageMessagesComponent } from './engaged-members-average-messages.component';

describe('EngagedMembersAverageMessagesComponent', () => {
  let component: EngagedMembersAverageMessagesComponent;
  let fixture: ComponentFixture<EngagedMembersAverageMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EngagedMembersAverageMessagesComponent]
    });
    fixture = TestBed.createComponent(EngagedMembersAverageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
