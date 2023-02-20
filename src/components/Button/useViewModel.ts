import {useAnimationState} from 'moti';

export function useButton() {
  const buttonAnimation = useAnimationState({
    pressIn: {
      transform: [{scale: 0.9}],
    },
    pressOut: {
      transform: [{scale: 1}],
    },
  });

  function handleAnimationPress(state: 'pressIn' | 'pressOut') {
    return () => {
      buttonAnimation.transitionTo(state);
    };
  }

  return {buttonAnimation, handleAnimationPress};
}
