interface ScrollProps {
  target: string;
  speed: number;
}

export const HorizontalScroll = ({ target, speed }: ScrollProps): void => {
  const containerEl: HTMLDivElement = document.querySelector<HTMLDivElement>(target) as HTMLDivElement;
  const currentScroll: number = containerEl.scrollLeft;
  const containerWidth: number = containerEl.clientWidth;

  // Desktop scroll based on provided speed
  const desktopScroll: number = currentScroll + speed;

  // Mobile scroll based on screen width and speed direction
  // Direction 1 = right | -1 left
  const direction: number = (speed > 0) ? 1 : -1;
  const mobileScroll: number = currentScroll + (containerWidth * direction);

  // Select scroll based on screen size (578px)
  const selectedScroll = (containerWidth > 578) ? desktopScroll : mobileScroll;

  containerEl.scrollLeft = (selectedScroll);
}