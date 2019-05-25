import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtjobsCreateComponent } from './govtjobs-create.component';

describe('GovtjobsCreateComponent', () => {
  let component: GovtjobsCreateComponent;
  let fixture: ComponentFixture<GovtjobsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtjobsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtjobsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
