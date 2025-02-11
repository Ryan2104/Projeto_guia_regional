import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuarujaPage } from './guaruja.page';

describe('GuarujaPage', () => {
  let component: GuarujaPage;
  let fixture: ComponentFixture<GuarujaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarujaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
