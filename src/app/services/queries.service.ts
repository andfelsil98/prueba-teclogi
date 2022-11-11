import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Details, Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  private apiUrl = `${environment.API_URL}`
  constructor(
    private http: HttpClient
  ) { }

  getAllGames(title: any) {
    console.log('Entra al servicio')
    return this.http.get<Games[]>(`${this.apiUrl}title=${title}&limit=10`);
  }

  getOneGame(gameId:string) {
    console.log('entro a recibir ID')
    return this.http.get<Details>(`${this.apiUrl}id=${gameId}`);
  }
}
