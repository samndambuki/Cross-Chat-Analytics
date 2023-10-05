import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommunityComponent } from './newcommunity.component';

describe('NewcommunityComponent', () => {
  let component: NewcommunityComponent;
  let fixture: ComponentFixture<NewcommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewcommunityComponent]
    });
    fixture = TestBed.createComponent(NewcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
