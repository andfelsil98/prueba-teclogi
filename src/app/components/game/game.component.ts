import { Component, OnInit, Input } from '@angular/core';
import { Games } from 'src/app/models/games';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  @Input() game: Games = {
    external: '',
    thumb: '',
    gameID: ''
  };
  constructor(

  ) { }

  ngOnInit(): void {
  }


}
