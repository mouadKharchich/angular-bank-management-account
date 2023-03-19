import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerInfoComponent } from './costumer-info.component';

describe('CostumerInfoComponent', () => {
  let component: CostumerInfoComponent;
  let fixture: ComponentFixture<CostumerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
