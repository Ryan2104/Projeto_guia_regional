import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaovicentePage } from './saovicente.page';

describe('SaovicentePage', () => {
  let component: SaovicentePage;
  let fixture: ComponentFixture<SaovicentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaovicentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
