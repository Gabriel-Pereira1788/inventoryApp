import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '../models/Product';

<<<<<<< HEAD
interface RootParamListI {
=======
export type RootParamListI = {
>>>>>>> development
  login: undefined;
  register: undefined;
  initialScreen: undefined;
  dashboard: undefined;
  products: undefined;
  myAccount: undefined;
  notifications: undefined;
<<<<<<< HEAD
  manageProduct: {product: Product};
}
=======
  chatBot: undefined;
  manageProduct: {product: Product};
};
>>>>>>> development

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamListI {}
  }
}
export type NavigationProps<T = keyof RootParamListI> = NativeStackScreenProps<
  RootParamListI,
  T
>;
