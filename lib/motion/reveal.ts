import { animate, stagger } from 'animejs';
import { motionPresets } from './presets';
import { prefersReducedMotion } from './scope';

export type RevealConfig = {
  selector?: string;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

const DEFAULT_SELECTOR = '.reveal:not([data-reveal-item]), [data-reveal="stagger"]';

const getNumber = (value: string | undefined, fallback: number) => {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const applyVisibleState = (element: HTMLElement) => {
  element.style.opacity = '1';
  element.style.transform = 'translateY(0px)';
};

const primeItems = (items: HTMLElement[], distance: number) => {
  items.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = `translateY(${distance}px)`;
  });
};

const animateElement = (element: HTMLElement, options: { delay?: number; distance?: number; duration?: number }) => {
  const distance = options.distance ?? motionPresets.distance.md;
  const duration = options.duration ?? motionPresets.duration.slow;
  const delay = options.delay ?? 0;

  animate(element, {
    opacity: [0, 1],
    translateY: [distance, 0],
    duration,
    delay,
    easing: motionPresets.easing.standard,
  });
};

const animateStaggerGroup = (group: HTMLElement) => {
  const items = Array.from(group.querySelectorAll<HTMLElement>('[data-reveal-item]'));
  if (!items.length) {
    animateElement(group, {});
    return;
  }

  const distance = getNumber(group.dataset.revealDistance, motionPresets.distance.md);
  const duration = getNumber(group.dataset.revealDuration, motionPresets.duration.base);
  const delay = getNumber(group.dataset.revealDelay, 0);
  const staggerGap = getNumber(group.dataset.revealStagger, motionPresets.stagger.base);

  primeItems(items, distance);

  animate(items, {
    opacity: [0, 1],
    translateY: [distance, 0],
    duration,
    delay: stagger(staggerGap, { start: delay }),
    easing: motionPresets.easing.standard,
  });
};

export const initReveal = ({
  selector = DEFAULT_SELECTOR,
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
}: RevealConfig = {}) => {
  if (typeof window === 'undefined') return () => {};

  const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!targets.length) return () => {};

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((target) => {
      if (target.dataset.reveal === 'stagger') {
        const items = Array.from(target.querySelectorAll<HTMLElement>('[data-reveal-item]'));
        items.forEach(applyVisibleState);
      }
      applyVisibleState(target);
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (element.dataset.reveal === 'stagger') {
          animateStaggerGroup(element);
        } else {
          animateElement(element, {
            delay: getNumber(element.dataset.revealDelay, 0),
            distance: getNumber(element.dataset.revealDistance, motionPresets.distance.md),
            duration: getNumber(element.dataset.revealDuration, motionPresets.duration.slow),
          });
        }
        if (once) observer.unobserve(element);
      });
    },
    { threshold, rootMargin }
  );

  targets.forEach((target) => {
    if (target.dataset.reveal === 'stagger') {
      const items = Array.from(target.querySelectorAll<HTMLElement>('[data-reveal-item]'));
      if (items.length) {
        primeItems(items, getNumber(target.dataset.revealDistance, motionPresets.distance.md));
      }
    }
    observer.observe(target);
  });

  return () => observer.disconnect();
};
