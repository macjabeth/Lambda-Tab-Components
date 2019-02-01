class Carousel {
  constructor (element) {
    this.element = element;
    this.figureImg = this.element.querySelector('.carousel-image');
    this.figureCap = this.element.querySelector('.carousel-caption');
  }
}

const test = new Carousel(document.querySelector('.carousel'));
