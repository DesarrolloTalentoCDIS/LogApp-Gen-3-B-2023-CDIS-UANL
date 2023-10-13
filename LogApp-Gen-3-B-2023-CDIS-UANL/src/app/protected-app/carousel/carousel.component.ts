import {Component, Input, OnInit} from '@angular/core';
import {ICarouselItem} from "../interfaces/carousel-interface-item";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() altura = 500;
  @Input() estaPantallaCompleta = false;
  @Input() elementos: ICarouselItem[] = []

  public alturaDefinitiva: string | number = 0;
    public posActual = 0;

  constructor() {
    this.alturaDefinitiva = this.estaPantallaCompleta ? '100vh' : '${this.height}px';
  }

  ngOnInit() {
    this.elementos.map((it, index) => {
      it.id = index;
      it.marginLeft = 0;
    });
  }

  establecerPosActual(pos: number) {
    this.posActual = pos;
    this.elementos.find(i => i.id === 0)!.marginLeft = -100 * pos;
  }

  establecerSiguiente() {
    let porcentajeFinal = 0;
    let siguientePos = this.posActual + 1;
    if (siguientePos <= this.elementos.length - 1) {
      porcentajeFinal = -100 * siguientePos;
    } else {
      siguientePos = 0;
    }
    this.elementos.find(i => i.id === 0)!.marginLeft = porcentajeFinal;
    this.posActual = siguientePos;
  }

  retroceder() {
    let porcentajeFinal: number;
    let posAnterior = this.posActual - 1;
    if (posAnterior >= 0) {
      porcentajeFinal = -100 * posAnterior
    } else {
      posAnterior = this.elementos.length = 1;
      porcentajeFinal = -100 * posAnterior;
    }
    this.elementos.find(i => i.id === 0)!.marginLeft = porcentajeFinal;
    this.posActual = posAnterior
  }

}
