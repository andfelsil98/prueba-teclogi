import { Injectable, Output, EventEmitter } from '@angular/core';
import { Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class EmittersService {
  @Output() gamesEmitter: EventEmitter<Games[]> = new EventEmitter();
  @Output() nullEmitter: EventEmitter<string> = new EventEmitter();
  @Output() detailsEmitter: EventEmitter<string> = new EventEmitter();



  constructor() { }

  recieveGames(e: Games[]) {
    console.log("mando la matriz de games",e)
    this.gamesEmitter.emit(e);
  }

  noResultGames(){
    console.log('mando el sin resultados')
    this.nullEmitter.emit('Por favor Ingrese una búsqueda válida');
  }

  detailsResult(detail: string){
    console.log('mando el detalle')
    this.detailsEmitter.emit(detail);
  }
}
