import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioexamenService } from '../services/servicioexamen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listapoesias',
  templateUrl: './listapoesias.page.html',
  styleUrls: ['./listapoesias.page.scss'],
})
export class ListapoesiasPage implements OnInit {
  poesias: Observable<any[]>
  coment: any = new Array ()
  constructor(private poesiaService: ServicioexamenService,
    public router:Router) { }

  ngOnInit() 
  {
    this.poesias= this.poesiaService.getpoesias()
  }
  showPoesia(id:any){
    this.router.navigate([`listapoesias/${id}`])
  } 

  listacomentarios(id:any)
  {
    console.log(id)
    this.router.navigate([`listacomentarios/${id}`])
    
  }
  showCrearpoesia()
  {
    this.router.navigate(["login"])
  }
  comentar(id:any)
  {
    this.router.navigate([`comentar/${id}`])
  }
}
