import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactsComponent } from './cotacts.component';

describe('CotactsComponent', () => {
  let component: CotactsComponent;
  let fixture: ComponentFixture<CotactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
