import { Component, OnInit } from '@angular/core';
import { RockyserviceService } from '../rockyservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:RockyserviceService) { }
   allCharacters: any[] = []
   sliderCharacters:any[] = []
  ngOnInit(): void {
    this.http.getCharacters().subscribe((response:any)=>{
     this.allCharacters = response
     console.log(this.allCharacters)
     let rand = Math.floor(Math.random()* this.allCharacters.length - 3)
     this.sliderCharacters = this.allCharacters.splice(rand,3)
     console.log(this.sliderCharacters)
    })
  }

  searchText :string = ""
  

  onSearchTextEntered(searchValue:string){
     this.searchText = searchValue;
     console.log(this.searchText)
  }


}
