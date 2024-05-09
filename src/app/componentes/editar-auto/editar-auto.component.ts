
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';
import Swal from 'sweetalert2';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent implements OnInit {
 formulario: FormGroup 
 vehiculo?: any= {};

 constructor(
  private autoService: AutomovilesService,
  private fb: FormBuilder,
  private activeRoute:ActivatedRoute
) {
  this.formulario = this.fb.group({
    "codigo": [''],
   "marca": [''],
    "modelo": [''],
     "foto": [''],
     "anio": [''],
    "kilometraje": [],
    "precio": [],
    "calificacion": [''],
   
  })
  
}
id:any
 ngOnInit(): void {
  this.activeRoute.params.subscribe(params =>{
    console.log(params['codigo']);
    this.id = params['codigo']
    
    this.autoService.getAutoById(params['codigo']).subscribe(data =>{
      this.vehiculo= data.data
      
      this.formulario = this.fb.group({
        "codigo": [[this.vehiculo?.codigo]],
       "marca": [this.vehiculo?.marca],
        "modelo": [this.vehiculo?.modelo],
         "foto": [this.vehiculo?.foto],
         "anio": [this.vehiculo?.anio],
        "kilometraje": [this.vehiculo?.kilometraje],
        "precio": [this.vehiculo?.precio],
        "calificacion": [this.vehiculo?.modelo],
       
      })
      
    })
  })
  }

guardarEdit() {
  if (this.formulario.valid) {
    this.autoService.updateAuto({ ...this.formulario.value },this.id).subscribe(
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
