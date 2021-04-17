import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

//import de variáveis
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Import de componentes
import { HomeComponent}  from './home/home.component';
import { ResultadosComponent } from './resultados/resultados.component';

// Se cria uma constante tipo Route e se criam as rotas assim:
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resultados/:pesquisa', component: ResultadosComponent }
];

//Para exportar devemos usar uma constante com o tipo "ModuleWithProviders"...ou seja Módulo com proveedores (vai proveer um mecânismo de rotas) SE LIGA!!!...devo dar um tipo no <any> no ModuleWithProviders.
export const routing: ModuleWithProviders <any> = RouterModule.forRoot (APP_ROUTES, { useHash: true });



//Isso aqui morre?:
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }
