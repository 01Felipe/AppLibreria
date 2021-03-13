import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialessComponent } from './editorialess/editorialess.component';
import { LibrosService } from './home/libros.service';
import { LibrosFormComponent } from './home/libros-form/libros-form.component';
import { AutoresFormComponent } from './autores/autores-form/autores-form.component';
import { AutoresService } from './autores/autores.service';
import { EditorialesFormComponent } from './editorialess/editoriales-form/editoriales-form.component';
import { EditorialesService } from './editorialess/editoriales.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AutoresComponent,
    EditorialessComponent,
    LibrosFormComponent,
    AutoresFormComponent,
    EditorialesFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'autores', component: AutoresComponent },
      { path: 'editoriales', component: EditorialessComponent },
      { path: 'libro-agregar', component: LibrosFormComponent },
      { path: 'autor-agregar', component: AutoresFormComponent },
      { path: 'editorial-agregar', component: EditorialesFormComponent },
      
    ])
  ],
  providers: [LibrosService, AutoresService, EditorialesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
