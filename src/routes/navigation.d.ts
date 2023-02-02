import {NativeStackScreenProps} from '@react-navigation/native-stack';

export declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      login: undefined;
      register: undefined;
      initialScreen: undefined;
      dashboard: undefined;
      products: undefined;
      myAccount: undefined;
      notifications: undefined;
    }
  }
}
export type NavigationProps = NativeStackScreenProps<RootParamList>;
