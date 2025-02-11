import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItanhaemPage } from './itanhaem.page';

describe('ItanhaemPage', () => {
  let component: ItanhaemPage;
  let fixture: ComponentFixture<ItanhaemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItanhaemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
