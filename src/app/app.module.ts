import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//decorator (gera informações adicionais p classe)
@NgModule({
	declarations: [ AppComponent ], // componentes q terei no módulo
	imports: [ BrowserModule ], // coisas extras q irei utilizar
	providers: [], // tudo q vou prover para os componentes, como serviços, etc..
	bootstrap: [ AppComponent ] //primeiro componente a ser iniciado
})
export class AppModule {}
