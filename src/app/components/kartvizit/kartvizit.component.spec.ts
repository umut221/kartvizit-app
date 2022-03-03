import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartvizitComponent } from './kartvizit.component';

describe('KartvizitComponent', () => {
  let component: KartvizitComponent;
  let fixture: ComponentFixture<KartvizitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartvizitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartvizitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
