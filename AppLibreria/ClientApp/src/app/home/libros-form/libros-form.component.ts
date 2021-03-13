import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosService } from '../libros.service';
import { ILibro } from '../_libro';

@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.css']
})
export class LibrosFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private librosServices: LibrosService,
    private router: Router) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      titulo: '',
      ano: '',
      genero: '',
      numeroPaginas: '',
      editorial: '',
      Autor: ''

    });
  }

  save()
  {
    let libro: ILibro = Object.assign({}, this.formGroup.value);
    console.table(libro);

    this.librosServices.Post(libro).subscribe(libro => this.onSaveSuccess(),
      error => console.error(error));
  }

  onSaveSuccess()
  {
    this.router.navigate(["/"]);
  }

}
