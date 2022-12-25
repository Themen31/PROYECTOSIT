import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriaclinicaComponent } from './edit-historiaclinica.component';

describe('EditHistoriaclinicaComponent', () => {
  let component: EditHistoriaclinicaComponent;
  let fixture: ComponentFixture<EditHistoriaclinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHistoriaclinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHistoriaclinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
