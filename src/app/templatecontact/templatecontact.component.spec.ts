import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecontactComponent } from './templatecontact.component';

describe('TemplatecontactComponent', () => {
  let component: TemplatecontactComponent;
  let fixture: ComponentFixture<TemplatecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatecontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
