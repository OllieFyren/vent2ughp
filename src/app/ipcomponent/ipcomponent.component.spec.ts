import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPComponentComponent } from './ipcomponent.component';

describe('IPComponentComponent', () => {
  let component: IPComponentComponent;
  let fixture: ComponentFixture<IPComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
