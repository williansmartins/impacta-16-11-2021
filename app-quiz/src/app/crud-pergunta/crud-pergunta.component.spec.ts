import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPerguntaComponent } from './crud-pergunta.component';

describe('CrudPerguntaComponent', () => {
  let component: CrudPerguntaComponent;
  let fixture: ComponentFixture<CrudPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
