import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHistoriaclinicaComponent } from './new-historiaclinica.component';

describe('NewHistoriaclinicaComponent', () => {
  let component: NewHistoriaclinicaComponent;
  let fixture: ComponentFixture<NewHistoriaclinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHistoriaclinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHistoriaclinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
