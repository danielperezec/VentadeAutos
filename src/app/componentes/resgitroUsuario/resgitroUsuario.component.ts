import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resgitroUsuario',
  templateUrl: './resgitroUsuario.component.html',
  styleUrls: ['./resgitroUsuario.component.css']
})
export class ResgitroUsuarioComponent implements OnInit {
form:any = []
  constructor() { }

  ngOnInit() {
  }

contacto(){

}

  registrar(){
    Swal.fire({
      title: "Exito",
      text: "Cliente registrado",
      icon: "success"
    });
  }
}

