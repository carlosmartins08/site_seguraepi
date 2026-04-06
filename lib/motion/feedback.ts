import { animate } from 'animejs';
import { motionPresets } from './presets';
import { prefersReducedMotion } from './scope';

export type FeedbackOptions = {
  hoverLift?: number;
  hoverScale?: number;
  pressScale?: number;
};

const noop = () => {};

export const attachButtonFeedback = (
  element: HTMLElement,
  options: FeedbackOptions = {}
) => {
  if (prefersReducedMotion()) return noop;

  const hoverLift = options.hoverLift ?? -2;
  const hoverScale = options.hoverScale ?? 1.01;
  const pressScale = options.pressScale ?? 0.98;

  let hoverAnimation: ReturnType<typeof animate> | null = null;
  let pressAnimation: ReturnType<typeof animate> | null = null;

  const playHover = (enter: boolean) => {
    hoverAnimation?.cancel();
    hoverAnimation = animate(element, {
      translateY: enter ? hoverLift : 0,
      scale: enter ? hoverScale : 1,
      duration: motionPresets.duration.base,
      ease: motionPresets.easing.standard,
    });
  };

  const playPress = (pressed: boolean) => {
    pressAnimation?.cancel();
    pressAnimation = animate(element, {
      scale: pressed ? pressScale : 1,
      duration: motionPresets.duration.fast,
      ease: motionPresets.easing.standard,
    });
  };

  const handleEnter = () => playHover(true);
  const handleLeave = () => {
    playHover(false);
    playPress(false);
  };
  const handleDown = () => playPress(true);
  const handleUp = () => playPress(false);

  element.addEventListener('pointerenter', handleEnter);
  element.addEventListener('pointerleave', handleLeave);
  element.addEventListener('pointerdown', handleDown);
  element.addEventListener('pointerup', handleUp);
  element.addEventListener('pointercancel', handleUp);

  return () => {
    hoverAnimation?.cancel();
    pressAnimation?.cancel();
    element.removeEventListener('pointerenter', handleEnter);
    element.removeEventListener('pointerleave', handleLeave);
    element.removeEventListener('pointerdown', handleDown);
    element.removeEventListener('pointerup', handleUp);
    element.removeEventListener('pointercancel', handleUp);
  };
};

export const attachCardFeedback = (
  element: HTMLElement,
  options: FeedbackOptions = {}
) => {
  if (prefersReducedMotion()) return noop;

  const hoverLift = options.hoverLift ?? -4;
  const hoverScale = options.hoverScale ?? 1.01;

  let hoverAnimation: ReturnType<typeof animate> | null = null;

  const playHover = (enter: boolean) => {
    hoverAnimation?.cancel();
    hoverAnimation = animate(element, {
      translateY: enter ? hoverLift : 0,
      scale: enter ? hoverScale : 1,
      duration: motionPresets.duration.base,
      ease: motionPresets.easing.standard,
    });
  };

  const handleEnter = () => playHover(true);
  const handleLeave = () => playHover(false);

  element.addEventListener('pointerenter', handleEnter);
  element.addEventListener('pointerleave', handleLeave);

  return () => {
    hoverAnimation?.cancel();
    element.removeEventListener('pointerenter', handleEnter);
    element.removeEventListener('pointerleave', handleLeave);
  };
};

export type IconFeedbackOptions = {
  trigger?: 'hover' | 'click' | 'both';
};

export const attachIconFeedback = (
  element: Element,
  options: IconFeedbackOptions = {}
) => {
  if (prefersReducedMotion()) return noop;

  const trigger = options.trigger ?? 'hover';
  let animation: ReturnType<typeof animate> | null = null;

  const playHover = (enter: boolean) => {
    animation?.cancel();
    animation = animate(element, {
      scale: enter ? 1.08 : 1,
      duration: motionPresets.duration.fast,
      ease: motionPresets.easing.standard,
    });
  };

  const playClick = () => {
    animation?.cancel();
    animation = animate(element, {
      rotate: [0, -8, 0],
      duration: motionPresets.duration.base,
      ease: motionPresets.easing.standard,
    });
  };

  const handleEnter = () => playHover(true);
  const handleLeave = () => playHover(false);
  const handleClick = () => playClick();

  if (trigger === 'hover' || trigger === 'both') {
    element.addEventListener('pointerenter', handleEnter);
    element.addEventListener('pointerleave', handleLeave);
  }

  if (trigger === 'click' || trigger === 'both') {
    element.addEventListener('click', handleClick);
  }

  return () => {
    animation?.cancel();
    element.removeEventListener('pointerenter', handleEnter);
    element.removeEventListener('pointerleave', handleLeave);
    element.removeEventListener('click', handleClick);
  };
};
