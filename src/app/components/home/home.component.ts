import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

   nuevosLanzamientos: any[] = [];

  constructor(private spotify: SpotifyService) { 

    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp:any)=>{
    //     this.paises = resp;
    //     console.log(resp);
    //   } );

    this.spotify.getNewReleases()
        .subscribe( (data:any) => {
          console.log(data.albums.items);
          this.nuevosLanzamientos = data.albums.items;
          
        } );
      
  }

}
