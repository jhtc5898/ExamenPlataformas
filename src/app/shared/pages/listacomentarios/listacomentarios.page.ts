import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioexamenService } from '../services/servicioexamen.service';

@Component({
  selector: 'app-listacomentarios',
  templateUrl: './listacomentarios.page.html',
  styleUrls: ['./listacomentarios.page.scss'],
})
export class ListacomentariosPage implements OnInit {

  comentarios: Observable<any[]>
  constructor( private route:ActivatedRoute,private poesiaService: ServicioexamenService) { }



  ngOnInit() 
  {
    const id = this.route.snapshot.paramMap.get("id")
    this.comentarios= this.poesiaService.getcomentarios()
  
  }

}
