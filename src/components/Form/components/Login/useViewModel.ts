import {useState} from 'react';
import {useAuth} from '../../../../hooks/useAuth';
import {SigninDTO} from '../../../../models/Auth';
import {Errors} from './view.models';

export function useLogin() {
  const [dataSignin, setDataSignin] = useState<SigninDTO>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({} as Errors);
  const {signIn, loading} = useAuth();

  const onSubmit = async () => {
    const validation = validationData(dataSignin);

    if (typeof validation === 'string') {
      await signIn(dataSignin);
    } else {
      setErrors(validation);
    }
  };

  const handleChange = (name: keyof SigninDTO) => {
    return (value: string) => {
      switch (name) {
        case 'email':
          setDataSignin(prev => ({...prev, [name]: value}));
          return;
        default:
          setDataSignin(prev => ({...prev, [name]: value}));
          return;
      }
    };
  };

  return {handleChange, dataSignin, onSubmit, loading, errors};
}

function validationData(data: SigninDTO): Errors | string {
  const newData = Object.entries(data).reduce((acc, [key, value]) => {
    if (!value.trim()) {
      acc[key as keyof Errors] = 'Campo vazio';
    }

    return acc;
  }, {} as Errors);

  return JSON.stringify(newData) === '{}' ? '' : newData;
}
