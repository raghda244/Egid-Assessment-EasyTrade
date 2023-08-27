import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockModalComponent } from './manage-stock-modal.component';

describe('ManageStockModalComponent', () => {
  let component: ManageStockModalComponent;
  let fixture: ComponentFixture<ManageStockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStockModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageStockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
