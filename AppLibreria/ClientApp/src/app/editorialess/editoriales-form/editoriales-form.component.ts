import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorialesService } from '../editoriales.service';
import { IEditorial } from '../_editorial';

@Component({
  selector: 'app-editoriales-form',
  templateUrl: './editoriales-form.component.html',
  styleUrls: ['./editoriales-form.component.css']
})
export class EditorialesFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private editorialServices: EditorialesService,
    private router: Router) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      direccion: '',
      telefono: '',
      correo: '',
      maximo: '',
    });


  }

  save() {
    let editoriales: IEditorial = Object.assign({}, this.formGroup.value);
    console.table(editoriales);

    this.editorialServices.Post(editoriales).subscribe(edi => this.onSaveSuccess(),
      error => console.error(error));
  }

  onSaveSuccess() {
    this.router.navigate(["/editoriales"]);
  }

}
