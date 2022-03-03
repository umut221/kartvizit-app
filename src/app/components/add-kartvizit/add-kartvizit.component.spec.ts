import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKartvizitComponent } from './add-kartvizit.component';

describe('AddKartvizitComponent', () => {
  let component: AddKartvizitComponent;
  let fixture: ComponentFixture<AddKartvizitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKartvizitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKartvizitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
