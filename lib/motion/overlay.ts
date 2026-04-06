import { createTimeline, stagger } from 'animejs';
import { motionPresets } from './presets';
import { prefersReducedMotion } from './scope';

export type OverlayAnimationTargets = {
  overlay: HTMLElement;
  items?: HTMLElement[];
};

export const animateOverlayOpen = ({ overlay, items = [] }: OverlayAnimationTargets) => {
  if (prefersReducedMotion()) {
    overlay.style.opacity = '1';
    overlay.style.transform = 'translateX(0%)';
    items.forEach((item) => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0px)';
    });
    return null;
  }

  const timeline = createTimeline({
    autoplay: true,
    defaults: {
      easing: motionPresets.easing.standard,
    },
  });

  timeline.add(overlay, {
    opacity: [0, 1],
    translateX: ['100%', '0%'],
    duration: motionPresets.duration.slow,
  });

  if (items.length) {
    timeline.add(
      items,
      {
        opacity: [0, 1],
        translateY: [12, 0],
        duration: motionPresets.duration.base,
        delay: stagger(motionPresets.stagger.fast),
      },
      '-=180'
    );
  }

  return timeline;
};

export const animateOverlayClose = ({ overlay, items = [] }: OverlayAnimationTargets) => {
  if (prefersReducedMotion()) {
    overlay.style.opacity = '0';
    overlay.style.transform = 'translateX(100%)';
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(8px)';
    });
    return null;
  }

  const timeline = createTimeline({
    autoplay: true,
    defaults: {
      easing: motionPresets.easing.standard,
    },
  });

  if (items.length) {
    timeline.add(items, {
      opacity: [1, 0],
      translateY: [0, 8],
      duration: motionPresets.duration.fast,
      delay: stagger(motionPresets.stagger.fast),
    });
  }

  timeline.add(
    overlay,
    {
      opacity: [1, 0],
      translateX: ['0%', '100%'],
      duration: motionPresets.duration.base,
    },
    items.length ? '-=120' : 0
  );

  return timeline;
};
