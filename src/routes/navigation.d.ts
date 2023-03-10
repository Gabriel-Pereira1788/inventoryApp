import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '../models/Product';

export type RootParamListI = {
  login: undefined;
  register: undefined;
  initialScreen: undefined;
  dashboard: undefined;
  products: undefined;
  myAccount: undefined;
  notifications: undefined;
  chatBot: undefined;
  manageProduct: {product: Product};
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamListI {}
  }
}
export type NavigationProps<T = keyof RootParamListI> = NativeStackScreenProps<
  RootParamListI,
  T
>;
