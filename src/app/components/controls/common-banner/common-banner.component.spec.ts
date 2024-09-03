import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBannerComponent } from './common-banner.component';

describe('CommonBannerComponent', () => {
  let component: CommonBannerComponent;
  let fixture: ComponentFixture<CommonBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonBannerComponent]
    });
    fixture = TestBed.createComponent(CommonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
