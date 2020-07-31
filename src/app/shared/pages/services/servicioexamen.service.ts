import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poesia } from '../../model/poesia';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Comentario } from '../../model/comentarios';
@Injectable({
  providedIn: 'root'
})
export class ServicioexamenService {
  user: Observable<any>
  constructor(private afs: AngularFirestore,private auth:AuthService,private router:Router) { }

  getpoesias(): Observable<any[]>{
    return this.afs.collection('poesias', 
        ref => ref.orderBy('fecha', 'asc')).valueChanges();//permite actualizar directamente
  }

  getcomentarios(): Observable<any[]>{
    return this.afs.collection('comentarios', 
        ref => ref.orderBy('uid', 'asc')).valueChanges();//permite actualizar directamente
  }


  insertEmpleo(poe:Poesia)
  {
    const refPoe=this.afs.collection("poesias")
    this.auth.getCurrentUser().then(user =>{
      console.log(user);
      poe.creador=user;
      this.user = this.auth.user;
      poe.uid = this.afs.createId()
      const param=JSON.parse(JSON.stringify(poe));
      refPoe.doc(poe.uid).set(param)
      if(user){
        this.router.navigate(['listapoesias']);
      }else{
       console.log("Problemas")
      }
    });

  } 
  insertComentario(com:Comentario)
  {
    const refPoe=this.afs.collection("comentarios")
    this.auth.getCurrentUser().then(user =>{
      console.log(user);
      com.creador=user;
      this.user = this.auth.user;
      com.uid = this.afs.createId()
      const param=JSON.parse(JSON.stringify(com));
      refPoe.doc(com.uid).set(param)
      if(user){
        this.router.navigate(['listapoesias']);
      }else{
       console.log("Problemas")
      }
    });

  } 
  

}
