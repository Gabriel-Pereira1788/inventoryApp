export interface SigninDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string | null;
  createdAt?: Date;
}
