import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autosDetail',
  templateUrl: './autosDetail.component.html',
  styleUrls: ['./autosDetail.component.css']
})
export class AutosDetailComponent implements OnInit {

  vehiculo?: Vehiculo;
  
  constructor(
    private route: ActivatedRoute,
    private autoService: AutomovilesService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.autoService.getAutoById(params['codigo']).subscribe(data =>{
        this.vehiculo = data.data
      })
    })
  }

}
