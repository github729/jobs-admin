import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtjobsComponent } from './govtjobs.component';

describe('GovtjobsComponent', () => {
  let component: GovtjobsComponent;
  let fixture: ComponentFixture<GovtjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
