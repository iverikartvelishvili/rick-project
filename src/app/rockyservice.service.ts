import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockyserviceService {

  constructor(private http:HttpClient) { }
  private url = "https://rickandmortyapi.com/api/character"
    getCharacters(){
      return this.http.get(this.url).pipe(map((response:any)=>{
        return response.results
       
      }))
    }

}
