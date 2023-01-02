import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {RegisterDTO} from '../../../models/Auth';

export function useRegister() {
  const [dataRegister, setDataRegister] = useState<RegisterDTO>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({} as RegisterDTO);

  const {createUser, loading} = useAuth();

  const onSubmit = async () => {
    const validation = validationData(dataRegister);
    if (typeof validation === 'string') {
      // await createUser(dataRegister);
    } else {
      setErrors(validation);
    }
  };

  const handleChange = (name: keyof RegisterDTO) => {
    return (value: string) => {
      const notMatchingPasswords =
        name === 'confirmPassword' && value !== dataRegister.password;
      if (notMatchingPasswords) {
        setDataRegister(prev => ({...prev, [name]: value}));

        setErrors(prev => ({...prev, confirmPassword: 'Senhas não coicidem!'}));
        return;
      } else {
        setErrors(prev => ({...prev, confirmPassword: ''}));
      }
      setDataRegister(prev => ({...prev, [name]: value}));
    };
  };

  return {onSubmit, handleChange, loading, dataRegister, errors};
}

function validationData(data: RegisterDTO): RegisterDTO | string {
  const newData = Object.entries(data).reduce((acc, [key, value]) => {
    if (!value.trim()) {
      acc[key as keyof RegisterDTO] = 'Campo vazio';
    }

    return acc;
  }, {} as RegisterDTO);

  return JSON.stringify(newData) === '{}' ? '' : newData;
}
