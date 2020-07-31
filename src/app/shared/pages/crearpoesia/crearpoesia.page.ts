import { Component, OnInit } from '@angular/core';
import { Poesia } from '../../model/poesia';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ServicioexamenService } from '../services/servicioexamen.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crearpoesia',
  templateUrl: './crearpoesia.page.html',
  styleUrls: ['./crearpoesia.page.scss'],
})
export class CrearpoesiaPage implements OnInit {
  poesia: Poesia = new Poesia () //Siempre se debe instanciar
  base64Image:any
  constructor(private poesiaService: ServicioexamenService,private router: Router,private auth:AuthService
    ,private camera: Camera,
    
    ) { }

  ngOnInit() {
  }
  
  async guardarPoesia()
  {
    console.log("Fechas:",this.poesia.fecha)
    let number = await this.poesiaService.insertEmpleo(this.poesia)
    console.log("Se Registro")
    //this.empleoService.insertEmpleo(this.empleo)
  }
  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image)
     }, (err) => {
      // Handle error
      console.log(err)
     });
  }
  saludar(data:any)
  {
    console.log("Saludar",data);
  }
  
  imagenCargada(e){
    console.log("imagen cargada")
    console.log(JSON.stringify(e))
    this.poesia.image = e;
  }
  async logout()
  {
    
    let error = await this.auth.logout();;
    if(error == undefined)
    {
    this.router.navigate(['login']);
    }else
    {
      alert(JSON.stringify(error))
    }
  }


}
