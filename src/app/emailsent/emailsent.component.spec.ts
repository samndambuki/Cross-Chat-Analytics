import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsentComponent } from './emailsent.component';

describe('EmailsentComponent', () => {
  let component: EmailsentComponent;
  let fixture: ComponentFixture<EmailsentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmailsentComponent]
    });
    fixture = TestBed.createComponent(EmailsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
