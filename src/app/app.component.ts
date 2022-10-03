import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'owo';
  public arregloTarjetas: Tarjeta[] = [];
  ngOnInit(): void {
    this.arregloTarjetas = [
      { titulo: 'video 1', subtitulo: 'Subtitulo 1' },
      { titulo: 'video 2', subtitulo: 'Subtitulo 2' },
      { titulo: 'video 3', subtitulo: 'Subtitulo 3' },
      { titulo: 'video 3', subtitulo: 'Subtitulo 3' },
    ];
  }
}
