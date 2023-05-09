import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //identificamos el formulario enviado desde el archivo html
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formularioService: FormService
  ) {}

  ngOnInit() {
    //definimos las propiedades que va a tener el formulario
    this.form = this.fb.group({
      id: new FormControl(''),
      Documento: new FormControl(''),
      Nombres: new FormControl(''),
      Apellidos: new FormControl(''),
      Telefono: new FormControl(''),
      Correo: new FormControl(''),
      Direccion: new FormControl(''),
    });
  }

  /**
   * Método para guardar la información
   */
  guardarInfo(){
    //definimos las propiedades que irán en el body
    let body ={
      id: 1,
      Documento: this.form.controls.Documento?.value,
      Nombres: this.form.controls.Nombres?.value,
      Apellidos: this.form.controls.Apellidos?.value,
      Telefono: this.form.controls.Telefono?.value,
      Correo: this.form.controls.Correo?.value,
      Direccion: this.form.controls.Direccion?.value,  
    }
    //llamamos el método creado en el servicio
    this.formularioService.guardar(body).subscribe(res => {
      alert('Excelente');
    })
  }
}
