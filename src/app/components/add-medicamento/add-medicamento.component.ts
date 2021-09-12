import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';
@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
  }

  medicamento: Medicamento = {
    idMedicamento: 0,
    laboratorio: '',
    nombre: '',
    precio: 0,
    stock: 0,
  }

  
  saveMedicamento() : void{
    console.log(">>>Save Inicio Impresion");
    console.log(this.medicamento);
    console.log(">>>Save Fin Impresion");


      this.medicamentoService.create(this.medicamento).subscribe(
          response =>{
            console.log(response.mensaje);
            alert(response.mensaje)
          },
          error =>{
            console.log(error);
          }
      )
  }
}
