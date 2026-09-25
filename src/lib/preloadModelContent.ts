import ProjectsData from './data/Project';
import ExperienceData from './data/Experience';

const modelImageSources = [
  ...ProjectsData.flatMap((project) => project.images),
  ...ExperienceData.map((experience) => experience.icon),
];

export const preloadModelContent = (): (() => void) => {
  let cancelled = false;

  const preload = () => {
    if (cancelled) return;

    modelImageSources.forEach((source) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = source;
    });
  };

  const idleWindow = window as Window & {
    requestIdleCallback?: (callback: () => void) => number;
    cancelIdleCallback?: (id: number) => void;
  };

  if (idleWindow.requestIdleCallback) {
    const callbackId = idleWindow.requestIdleCallback(preload);

    return () => {
      cancelled = true;
      idleWindow.cancelIdleCallback?.(callbackId);
    };
  }

  const timeoutId = window.setTimeout(preload, 0);

  return () => {
    cancelled = true;
    window.clearTimeout(timeoutId);
  };
};