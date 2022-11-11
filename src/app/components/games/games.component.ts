import { Component, OnInit } from '@angular/core';
import { Games} from 'src/app/models/games';
import { EmittersService } from 'src/app/services/emitters.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  games: Games[]= [];
  noResults: string = '';
  welcome: string = ''
  constructor(
    private emitters: EmittersService
  ) { }

  ngOnInit(): void {
    this.emitters.gamesEmitter
    .subscribe(data => {
      console.log(`llego el array de GAMES: ${data}`)
      this.games = data;
    })

    this.emitters.nullEmitter
    .subscribe( data=> {
      console.log(`llego No results${data}`)
      this.noResults = data;
    })

  }

}
