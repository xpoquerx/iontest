import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorPage } from './author.page';

describe('AuthorPage', () => {
  let component: AuthorPage;
  let fixture: ComponentFixture<AuthorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
