import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BertiogaPage } from './bertioga.page';

describe('BertiogaPage', () => {
  let component: BertiogaPage;
  let fixture: ComponentFixture<BertiogaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BertiogaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
