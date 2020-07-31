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
  poesias: Observable<any[]>
  constructor(private empleosService: ServicioexamenService,
    public router:Router) { }

  ngOnInit()
   {
    this.poesias= this.empleosService.getpoesias()
  }
  

}
