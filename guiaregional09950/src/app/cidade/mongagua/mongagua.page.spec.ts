import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MongaguaPage } from './mongagua.page';

describe('MongaguaPage', () => {
  let component: MongaguaPage;
  let fixture: ComponentFixture<MongaguaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MongaguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
