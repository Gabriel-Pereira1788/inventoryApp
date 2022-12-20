import React, {ComponentType} from 'react';

export function withPreConf<
  T extends Object & JSX.IntrinsicAttributes,
  P extends keyof T,
>(Component: ComponentType<T>, preProps: Pick<T, P>) {
  return function Handler(props: Omit<T, P>) {
    return <Component {...props} {...preProps} />;
  };
}
