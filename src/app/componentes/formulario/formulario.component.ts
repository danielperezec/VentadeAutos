import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup 

  constructor(
    private autoService: AutomovilesService,
    private fb: FormBuilder,
    private activeRoute:ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      "codigo": ['', [Validators.required]],
     "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "foto": [''],
      "anio": ['', [Validators.required]],
      "kilometraje": [],
      "precio": [],
      "calificacion": ['', [Validators.required]],
      
    })

    
  }

  ngOnInit(): void {

  }

  guardar() {
    console.log(this.formulario);
    
    if (this.formulario.valid) {
      this.autoService.insertVehiculo({ ...this.formulario.value }).subscribe(
        respuesta => {
          console.log(respuesta);
          
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Autmovil Registrado con Exito",
              icon: "success"
            });
          }
        }
      );
    } else {
    console.log(this.formulario);
    
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      });
    }
  }



}


