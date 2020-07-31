import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioexamenService } from '../services/servicioexamen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  empleados: Observable<any[]>
  constructor(private empleosService: ServicioexamenService,
    public router:Router) { }

  ngOnInit()
   {
    this.empleados= this.empleosService.getEmpleos()
  }
  showEmpleo(id:any){
    this.router.navigate([`listar/${id}`])
  }

}
