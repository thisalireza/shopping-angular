import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[lazyLoad]' // Now works with any element, not just img tags
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private element!: HTMLElement;

  constructor(private elRef: ElementRef<HTMLElement>) {
    this.element = elRef.nativeElement;
  }

  ngOnInit(): void {
    // Only apply lazy loading if explicitly enabled
    if (!this.element.hasAttribute('data-lazy')) {
      return;
    }

    // Use IntersectionObserver directly without checking for loading attribute
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          // Handle both img and background-image cases
          if (target.tagName === 'IMG') {
            const img = target as HTMLImageElement;
            img.src = img.dataset.src || '';
          } else {
            // Handle elements with background images
            const backgroundImage = target.style.backgroundImage;
            if (backgroundImage && backgroundImage.includes('url')) {
              target.style.backgroundImage = backgroundImage.replace('lazy-', '');
            }
          }

          this.observer.unobserve(target);
        }
      });
    });

    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
