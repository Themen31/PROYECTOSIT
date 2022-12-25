import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaclinicaListComponent } from './historiaclinica-list.component';

describe('HistoriaclinicaListComponent', () => {
  let component: HistoriaclinicaListComponent;
  let fixture: ComponentFixture<HistoriaclinicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaclinicaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaclinicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
