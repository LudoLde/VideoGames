import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../Models/Article';
import { Game } from '../Models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamespotApiService {
private apiArticleUrl: string = "/api/api/articles/?api_key=cee1bdaf1bd399eb14bb794001f6ca2643dec31b"
private apiGameUrl: string = "/api/api/games/?api_key=cee1bdaf1bd399eb14bb794001f6ca2643dec31b"  
constructor(private http: HttpClient) {}

  getGamespotArticles(): Observable< Article[]>{
    const params = new HttpParams()
    .set('format', 'json')
    .set('field_list', 'id,authors,title,deck,lede,body,image,categories,publish_date')
    .set('filter', 'publish_date:2018-01-01|2024-12-31')

    return this.http.get<{results: Article[]}>(this.apiArticleUrl, {params}).pipe(
      map((response => response.results))
    )
  }

  getGamespotGames(): Observable<Game[]> {
    const params = new HttpParams()
    .set('format', 'json')
    .set('field_list', 'id,release_date,deck,description,name,image,genres,themes,franchises,articles_api_url')
    .set('filter', 'release_date:2018-01-01|2024-12-31')
    return this.http.get<{results: Game[]}>(this.apiGameUrl, {params})
    .pipe(map((response => response.results)))
  }
}
