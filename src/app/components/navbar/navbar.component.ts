import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueriesService } from 'src/app/services/queries.service';
import { debounceTime } from 'rxjs';
import { Games } from 'src/app/models/games';
import { EmittersService } from 'src/app/services/emitters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  games: Games | null = null;
  search = new FormControl('')
  searchFilter: string | null = '';
  detail: string = '';
  constructor(
    private queries: QueriesService,
    private emitters: EmittersService
  ) {

  }

  ngOnInit(): void {
    this.emitters.detailsEmitter
    .subscribe(data => {
      console.log(`llego el array de GAMES: ${data}`)
      this.detail = data;
    })

    this.search.valueChanges
    .pipe(
      debounceTime(100)
    )
    .subscribe ( value => {
      console.log(value);
      this.searchFilter = value;
    });


  }

  readGames () {
    this.queries.getAllGames(this.searchFilter)
    .subscribe (data => {
      console.log('Entro')
      console.log(data);
      if (data.length === 0) {
        console.log('No hay datos que retorne')
        this.emitters.noResultGames();
      }
        this.emitters.recieveGames(data);

      // emito la informacion a traves del servicio para que el componente de games se suscriba y pueda renderizarlo

    })
  }

  removeDetail(){
    this.queries.getAllGames(this.searchFilter)
    .subscribe (data => {
        this.emitters.recieveGames(data);
    })
    this.detail = ''
    console.log('ya borro detail: ', this.detail)
  }
}
