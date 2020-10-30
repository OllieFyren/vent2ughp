import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponentComponent } from './code-component.component';

describe('CodeComponentComponent', () => {
  let component: CodeComponentComponent;
  let fixture: ComponentFixture<CodeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
