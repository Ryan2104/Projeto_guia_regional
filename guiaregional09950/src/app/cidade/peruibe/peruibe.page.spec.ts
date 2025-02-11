import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeruibePage } from './peruibe.page';

describe('PeruibePage', () => {
  let component: PeruibePage;
  let fixture: ComponentFixture<PeruibePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruibePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
