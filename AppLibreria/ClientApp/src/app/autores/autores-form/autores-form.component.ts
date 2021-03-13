import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IAutor } from '../autor';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutoresFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private autoresServices: AutoresService,
    private router: Router) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      fecha: '',
      ciudad_Procedencia: '',
      correo: '',
    });
  }

  save() {
    let autores: IAutor = Object.assign({}, this.formGroup.value);
    console.table(autores);

    this.autoresServices.Post(autores).subscribe(autor => this.onSaveSuccess(),
      error => console.error(error));
  }

  onSaveSuccess() {
    this.router.navigate(["/autores"]);
  }

}
