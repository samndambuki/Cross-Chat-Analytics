import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentemailComponent } from './resentemail.component';

describe('ResentemailComponent', () => {
  let component: ResentemailComponent;
  let fixture: ComponentFixture<ResentemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResentemailComponent]
    });
    fixture = TestBed.createComponent(ResentemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
