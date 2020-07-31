import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/comentarios';
import { ServicioexamenService } from '../services/servicioexamen.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.page.html',
  styleUrls: ['./comentar.page.scss'],
})
export class ComentarPage implements OnInit {

  constructor(private comentarioservice :ServicioexamenService,
    private route:ActivatedRoute) { }
  com:Comentario =new Comentario()

  ngOnInit() 
  {

  }
  async guardarcomentario()
  {
    this.com.destinatario=this.route.snapshot.paramMap.get("id")
    console.log(this.com.comentario)
    this.comentarioservice.insertComentario(this.com)
  }

}
