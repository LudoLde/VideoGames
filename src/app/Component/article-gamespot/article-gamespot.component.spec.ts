import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGamespotComponent } from './article-gamespot.component';

describe('ArticleGamespotComponent', () => {
  let component: ArticleGamespotComponent;
  let fixture: ComponentFixture<ArticleGamespotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleGamespotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGamespotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
