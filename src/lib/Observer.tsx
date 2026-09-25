interface ImageObserverProps {
  sectionElement: HTMLElement;
  stopObserver?: boolean;
  action?: () => void;
}

export const ImageObserver = ({ sectionElement, stopObserver = true, action = () => {} }: ImageObserverProps): (() => void) => {
  sectionElement.classList.add('reveal-on-scroll');

  const observerOptions = {
    threshold: 0.1
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      sectionElement.classList.add('is-visible');
      action();

      sectionElement.querySelectorAll<HTMLImageElement>('img')?.forEach(element => {
        element.src = element.dataset.img as string;
      });

      if (stopObserver) {
        observer.disconnect();
      }
    }
  }, observerOptions);

  observer.observe(sectionElement);

  return () => {
    observer.disconnect();
  };
}
