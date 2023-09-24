import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordchangesuccessfulComponent } from './passwordchangesuccessful.component';

describe('PasswordchangesuccessfulComponent', () => {
  let component: PasswordchangesuccessfulComponent;
  let fixture: ComponentFixture<PasswordchangesuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PasswordchangesuccessfulComponent]
    });
    fixture = TestBed.createComponent(PasswordchangesuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
