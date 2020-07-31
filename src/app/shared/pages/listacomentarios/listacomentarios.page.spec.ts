import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacomentariosPage } from './listacomentarios.page';

describe('ListacomentariosPage', () => {
  let component: ListacomentariosPage;
  let fixture: ComponentFixture<ListacomentariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomentariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacomentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
