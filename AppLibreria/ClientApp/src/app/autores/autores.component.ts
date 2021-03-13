import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { AutoresService } from './autores.service';
import { IAutor } from './autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores: IAutor[];

  constructor(private autoresServices: AutoresService) { }

  ngOnInit() {
    this.autoresServices.GetAu().subscribe(Au => this.autores = Au, error => console.error(error));
  }

}
