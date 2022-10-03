import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  public image:string = "https://ae01.alicdn.com/kf/Hb1fb319110c14dc9bbc4b47ba28a2374m/2Pcs-Kawaii-Sanrioed-Anime-Stickers-Aesthetic-Cartoon-Cute-My-Melody-Car-Stickers-Modified-Graffiti-Stickers-Gift.jpg"

  public image2:string = "https://ae01.alicdn.com/kf/Hb1fb319110c14dc9bbc4b47ba28a2374m/2Pcs-Kawaii-Sanrioed-Anime-Stickers-Aesthetic-Cartoon-Cute-My-Melody-Car-Stickers-Modified-Graffiti-Stickers-Gift.jpg"

  public text:string = "My Melody Aesthetic"

  constructor() { }

  ngOnInit(): void {
  }

}
