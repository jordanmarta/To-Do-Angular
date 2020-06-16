import { Component } from '@angular/core';

// metadados para a classe
@Component({
	selector: 'app-root', // <app-root>
	templateUrl: './app.component.html', // define o html do componente
	// template: '<p>meu template</p>', // posso definir o html aqui dentro caso seja preciso
	styleUrls: [ './app.component.css' ] // define o css do componente
})
export class AppComponent {
	public todos: any[] = [];
	public title: String = 'Minhas tarefas';

	/**
   * ctor
   */
	constructor() {
		this.todos.push('passear com o cachorro');
		this.todos.push('ir ao supermercado');
		this.todos.push('cortar o cabelo');
	}
}
