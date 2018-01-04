import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailCardComponent } from './message-detail-card.component';

describe('MessageDetailCardComponent', () => {
  let component: MessageDetailCardComponent;
  let fixture: ComponentFixture<MessageDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
