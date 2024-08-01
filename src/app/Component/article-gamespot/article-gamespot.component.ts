import { Component, OnInit } from '@angular/core';
import { GamespotApiService } from '../../Services/gamespot-api.service';
import { Article } from '../../Models/Article';
import { Game } from '../../Models/Game';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-gamespot',
  templateUrl: './article-gamespot.component.html',
  styleUrl: './article-gamespot.component.css'
})
export class ArticleGamespotComponent implements OnInit{
  articles: Article[] = []
  game$: Observable<Game[]>
  games: Game[] = []
  selectedGame: string
  isFocused: boolean = false
 constructor(private gamespotApi: GamespotApiService){}

 ngOnInit() {
   this.getArticle()
   this.getGames()
   this.game$ = this.gamespotApi.getGamespotGames() 
 }

 getArticle(){
    this.gamespotApi.getGamespotArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;   
      },
      error => {
        console.error('Erreur lors de la récupération des articles', error);
      }
    );
 }

 getGames() {
  this.gamespotApi.getGamespotGames().subscribe(
    (gamesData: Game[]) => {
      this.games = gamesData;
      console.table(gamesData)
  },
  error => {
    console.error('Erreur lors de la récupération des jeux', error);
  })
 }

 onFocusSelect() {
   this.isFocused = true
 }
 onBlur() {
  this.isFocused = false
 }

}
