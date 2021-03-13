import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { LibrosService } from './libros.service';
import { ILibro } from './_libro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  libros: ILibro[];

  constructor(private librosServices: LibrosService) { }

  ngOnInit() {
    this.librosServices.GetLib().subscribe(lib => this.libros = lib, error => console.error(error));
  }

}
