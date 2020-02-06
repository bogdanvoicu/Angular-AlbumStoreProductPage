import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductTracklistingComponent } from './product-tracklisting.component';

describe('PoductTracklistingComponent', () => {
  let component: PoductTracklistingComponent;
  let fixture: ComponentFixture<PoductTracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductTracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductTracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
