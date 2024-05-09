import { Component, OnInit } from '@angular/core';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {

  tituloListaAutos: string = "Lista de Automóviles";
  

  constructor() { }

  ngOnInit(){
   
  }

}
