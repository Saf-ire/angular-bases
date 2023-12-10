import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzMainPageComponent } from './dbz-main-page.component';

describe('DbzMainPageComponent', () => {
  let component: DbzMainPageComponent;
  let fixture: ComponentFixture<DbzMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbzMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
