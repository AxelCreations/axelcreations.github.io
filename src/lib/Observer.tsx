interface ImageObserverProps {
  sectionElement: HTMLElement;
  stopObserver?: boolean;
  action?: () => void;
}

export const ImageObserver = ({ sectionElement, stopObserver = true, action = () => {} }: ImageObserverProps): void => {
  const observerOptions = {
    rootMargin: '-200px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      action();

      sectionElement.querySelectorAll<HTMLImageElement>('img')?.forEach(element => {
        element.src = element.dataset.img as string;
      });

      if (stopObserver) {
        observer.disconnect();
        observer.unobserve(sectionElement);
      }
    }
  }, observerOptions);

  observer.observe(sectionElement);
}
