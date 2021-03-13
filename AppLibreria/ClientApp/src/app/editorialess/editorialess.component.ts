import { Component, OnInit } from '@angular/core';
import { EditorialesService } from './editoriales.service';
import { IEditorial } from './_editorial';

@Component({
  selector: 'app-editorialess',
  templateUrl: './editorialess.component.html',
  styleUrls: ['./editorialess.component.css']
})
export class EditorialessComponent implements OnInit {


  editoriales: IEditorial[];

  constructor(private editorialesService: EditorialesService) { }

  ngOnInit() {
    this.editorialesService.GetEdi().subscribe(Edi => this.editoriales = Edi, error => console.error(error));
  }

}
