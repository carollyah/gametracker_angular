import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandeComponent } from './recommande.component';

describe('RecommandeComponent', () => {
  let component: RecommandeComponent;
  let fixture: ComponentFixture<RecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
