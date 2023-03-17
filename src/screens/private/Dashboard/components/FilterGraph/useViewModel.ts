import {FilterGraphProps} from './View';
import {useAnimationState} from 'moti';
import {useEffect} from 'react';

type UseFilterGraphProps = Pick<
  FilterGraphProps,
  'changeFilter' | 'currentFilter' | 'identifier'
>;

export function useFilterGraph({
  currentFilter,
  identifier,
  changeFilter,
}: UseFilterGraphProps) {
  const filterAnimation = useAnimationState({
    unactive: {
      backgroundColor: 'transparent',
    },
    active: {
      backgroundColor: '#2989b0',
    },
  });

  function handleFilter() {
    changeFilter(identifier);
  }

  useEffect(() => {
    if (currentFilter === identifier) {
      filterAnimation.transitionTo('active');
    } else {
      filterAnimation.transitionTo('unactive');
    }
  }, [currentFilter, identifier, filterAnimation]);

  return {filterAnimation, handleFilter};
}
