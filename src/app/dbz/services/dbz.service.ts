import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

	private _personajes: Personaje[] = [
		{nombre: 'Goku',  poder: 15000},
		{nombre: 'Vegeta',  poder: 8500},
	];

	get personajes(): Personaje[] {
		// [...] Se utiliza para crear un objeto en JavaScript y enviarlo, así no mandar el objeto por referencia, que lo hace siempre así JavaScript
		return [...this._personajes];
	}

	constructor(){}

	agregarPersonaje( nuevoPersonaje: Personaje ){
		this._personajes.push(nuevoPersonaje);
	}
}