import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListapoesiasPage } from './listapoesias.page';

describe('ListapoesiasPage', () => {
  let component: ListapoesiasPage;
  let fixture: ComponentFixture<ListapoesiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapoesiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListapoesiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
