import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';


@Component({
  selector: 'autos-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private autosService: AutomovilesService) { }

  public muestraImagen: boolean = false;

  public listaVehiculos: Array<Vehiculo> = [];

  public filtro: string = "";
  public rows: number = 10;
  public page: number = 1

  ngOnInit(): void {
    console.log("ingreso a ejeecutarse")
    this.getAutos()
  }


  toggleImg(): void {
    this.muestraImagen = !this.muestraImagen;
  }
  getAutos() {
    this.autosService.getAllAutos().subscribe((data) => {
     this.listaVehiculos = data.data
    })
  }

  deleteAutoById(id: string) {
    this.autosService.deleteAuto(id).subscribe(
      (data) => {
        this.getAutos();
      },
      (error) => {
        console.log(error)
      }
    )
  }
consultarVehiculo() {
    this.autosService.getAllAutos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      console.log(respuesta);
      if(respuesta.codigo=='1'){
        this.listaVehiculos = respuesta.data;
        this.paginar(respuesta.pages)
      }
    });
  }
  cambiarPag(pagina: number) {
    this.page = pagina;
    this.consultarVehiculo();
  }

  listaPags: Array<number> = [];
  paginar(pag: number) {
    this.listaPags = [];
    for (let i = 1; i <= pag; i++) {
      this.listaPags.push(i)
    }
  }

}
