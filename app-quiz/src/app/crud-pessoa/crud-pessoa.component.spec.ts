import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPessoaComponent } from './crud-pessoa.component';

describe('CrudPessoaComponent', () => {
  let component: CrudPessoaComponent;
  let fixture: ComponentFixture<CrudPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
