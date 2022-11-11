import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Games, Details, Info, Deal } from 'src/app/models/games';
import { QueriesService } from 'src/app/services/queries.service';
import { Location } from '@angular/common';
import { EmittersService } from 'src/app/services/emitters.service';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.sass']
})
export class GameDetailsComponent implements OnInit {
  gameId: string | null = null;
  game: Details | null = null;
  deals: Deal[] | undefined = [];
  searchFilter: string | null = '';
  constructor(
    private queries: QueriesService,
    private location: Location,
    private route: ActivatedRoute,
    private emitters: EmittersService
  ){ }

  ngOnInit(): void {
    this.readOneGame();
    // this.emitters.searchEmitter
    // .subscribe( data=> {
    //   console.log(`llego search a game details${data}`)
    //   this.searchFilter = data;
    //   console.log("se guardo search en searchfilter", this.searchFilter)
    // })
  }

  readOneGame() {
    this.emitters.detailsResult('Data in');
    this.route.paramMap//ME PERMITE ACCEDER A LOS PARAMETROS OBLIGATORIOS Y OPCIONALES DE UNA RUTA
      .pipe(//TOMA UNO O MAS OPERADORES Y RETORNA UN OBSERVABLE
        switchMap((params) => {
          this.gameId = params.get('id');
          console.log(this.gameId)
          if (this.gameId) {
            return this.queries.getOneGame(this.gameId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
        this.game = data;
        this.deals = data?.deals
        console.log(data);
      });
  }

}
