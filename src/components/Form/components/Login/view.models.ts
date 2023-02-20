import {SigninDTO} from '../../../../models/Auth';

export type Errors = {
  [name in keyof SigninDTO]: string;
};
