import { Directive, ElementRef, OnInit } from '@angular/core';

// بر روی عکس مورد نظر lazyload ایجاد
// میباشد data-src و src هایattribute که دارای
@Directive({
  selector: '[app-lazy-load]',
  standalone: true,
})
export class LazyLoadDirective implements OnInit {
  constructor(private el: ElementRef) {}

  // viewport نحوه کار به این صورت است که به محض ورود آیتم مورد نظر به
  // میشود placeholder عکس نهایی جایگزین
  ngOnInit(): void {
    const parentElement = this.el.nativeElement;
    this.imageObserver.observe(parentElement);
  }

  intersectionDetector = function (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      const imageElement = entry.target.querySelector('.lazy-image');
      if (!entry.isIntersecting) return;
      imageElement.setAttribute('src', imageElement.getAttribute('data-src'));
      observer.unobserve(entry.target);
    });
  };

  imageObserver = new IntersectionObserver(this.intersectionDetector, {
    root: null,
    threshold: 0.2,
  });
}
