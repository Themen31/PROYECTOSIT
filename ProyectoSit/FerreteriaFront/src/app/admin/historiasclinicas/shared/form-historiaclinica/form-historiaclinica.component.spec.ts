import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHistoriaclinicaComponent } from './form-historiaclinica.component';

describe('FormHistoriaclinicaComponent', () => {
  let component: FormHistoriaclinicaComponent;
  let fixture: ComponentFixture<FormHistoriaclinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHistoriaclinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHistoriaclinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
