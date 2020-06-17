import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
	declarations: [ AppComponent ], 
	imports: [ 
		BrowserModule,
		ReactiveFormsModule
	], 
	providers: [], 
	bootstrap: [ AppComponent ] 
})
export class AppModule {}

// @NgModule = decorator (gera informações adicionais p classe)
// ** como funciona:
// declarations = componentes q terei no módulo
// imports = coisas extras q irei utilizar
// providers = tudo q vou prover para os componentes, como serviços, etc..
// bootstrap = primeiro componente a ser iniciado
// **