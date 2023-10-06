import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedAppContainerComponent } from './protected-app-container.component';

describe('ProtectedAppContainerComponent', () => {
  let component: ProtectedAppContainerComponent;
  let fixture: ComponentFixture<ProtectedAppContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedAppContainerComponent]
    });
    fixture = TestBed.createComponent(ProtectedAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
