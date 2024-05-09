import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnInit, OnChanges {

  @Input() calificacion:any = 0;
  @Output() accionClick = new EventEmitter<any>();

  lista:Array<any>=[];

  constructor() { }

  ngOnInit() {
    this.generar()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['calificacion'].currentValue){
      this.generar();
    
    }
  }
generar(){
  this.lista =[];
  for(let i=0; i<this.calificacion; i++){
    this.lista.push(1)
  }
}
select(){
  this.accionClick.emit(this.calificacion)
}
}
