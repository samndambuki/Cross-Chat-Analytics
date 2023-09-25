import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouremailComponent } from './youremail.component';

describe('YouremailComponent', () => {
  let component: YouremailComponent;
  let fixture: ComponentFixture<YouremailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YouremailComponent]
    });
    fixture = TestBed.createComponent(YouremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
