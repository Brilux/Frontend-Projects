class Carousel {
    constructor(el) {
        this.el = el;
        this.currentIndex = 0;
        this.slidesMargin = 0;
        this.initElements();
        this.initCarousel();
        this.listenEvents();
    }

    initElements() {
        this.elements = {
            prev: this.el.querySelector('[data-prev]'),
            next: this.el.querySelector('[data-next]'),
            slides: this.el.querySelector('.slides'),
        };
    }

    initCarousel() {
        this.initSlides();
    }

    initSlides() {
        this.slides = this.el.querySelectorAll('.slide');
    }

    listenEvents() {
        this.elements.prev.addEventListener('click', () => {
            this.elements.slides.prepend(this.slides[this.slides.length - 1]);
            this.initSlides();
        });
        this.elements.next.addEventListener('click', () => {
            this.elements.slides.append(this.slides[this.currentIndex]);
            this.initSlides();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('.carousel'));
    console.dir(carousel);
});
