import {NativeStackScreenProps} from '@react-navigation/native-stack';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      register: undefined;
      initialScreen: undefined;
      dashboard: undefined;
    }
  }
}
export type NavigationProps = NativeStackScreenProps<RootParamList>;
