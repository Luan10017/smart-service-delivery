import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class CoreService<T> {
    protected http: HttpClient;
    private url: string;

    constructor(http: HttpClient, url: string){
        this.http = http;
        this.url = url;

    }
    public getLista(): Observable<T[]>{
        return this.http.get<T[]>(this.url);
    }

    public getItem(id: any) : Observable<T> {

        const url_id = `${this.url}/${id}`;
        return this.http.get<T>(url_id);
    }

    public postItem(item: T) : Observable<T> {
        return this.http.post<T>(this.url, item);
    }

    public putItem(item: T, id: any) : Observable<T> {
        const url_id = `${this.url}/${id}`;
        return this.http.put<T>(url_id, item);
    }

    public deleteItem(id: any) : Observable<T> {
        const url_id = `${this.url}/${id}`;
        return this.http.delete<T>(url_id);
    }
}