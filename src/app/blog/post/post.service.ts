import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
  public postDetailURL = "mock-data/post-mock.json";
  public postListURL = "mock-data/postlist-mock.json";
  public postListSearchURL = "mock-data/postlist-search-mock.json";
  public getArticleListURL = "/api/getArticleList";
  public getArticleDetailURL = "/api/getArticleDetail"

  constructor(public httpClient: HttpClient) {

  }

  public get(path: string): Observable<any> {
    return this.httpClient.get(path);
  }

  public post(path: string, body: any): Observable<any> {
    return this.httpClient.post(path, body);
  }

  public getArticleList(): Observable<any> {
    return this.get(this.getArticleListURL);
  }

  public getArticleDetail(id: string): Observable<any> {
    const data = { "id": id }
    return this.post(this.getArticleDetailURL, data);
  }
}
