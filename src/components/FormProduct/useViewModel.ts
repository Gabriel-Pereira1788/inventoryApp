import {useState} from 'react';
import {ProductDTO} from '../../models/Product';
import {useUser} from '../../store/useUser';
import {MASKS} from '../../utils/masks';
import {FormProductProps} from './Form';

type Errors = {[name in keyof ProductDTO]: string};

type UseFormProductProps = Pick<FormProductProps, 'onSubmit'>;

export function useFormProduct({onSubmit}: UseFormProductProps) {
  const user = useUser();
  const [productDTO, setProductDTO] = useState<ProductDTO>({
    id_user: user?.uid,
    name_product: '',
    price_purchased: '',
    price_saled: '',
    storage: '',
    category: '',
  });
  const [errors, setErrors] = useState({} as Errors);

  function handleChange(name: keyof ProductDTO) {
    return (value: string) => {
      switch (name) {
        case 'price_purchased':
          setProductDTO(prev => ({...prev, [name]: MASKS.currency(value)}));
          return;
        case 'price_saled':
          setProductDTO(prev => ({...prev, [name]: MASKS.currency(value)}));
          return;
        default:
          setProductDTO(prev => ({...prev, [name]: value}));
      }
    };
  }

  function handleChangeCurrency(name: keyof ProductDTO) {
    return (value: number) => {
      setProductDTO(prev => ({...prev, [name]: value}));
    };
  }

  async function handleSubmit() {
    // console.log(productDTO);

    const Errors = validationData(productDTO);

    if (Errors) {
      setErrors(Errors);
      return;
    }
    const normalizedData = normalizeData(productDTO);
    await onSubmit(normalizedData);
  }

  return {
    productDTO,
    errors,
    handleChange,
    handleChangeCurrency,
    handleSubmit,
  };
}

function validationData(data: ProductDTO) {
  let Errors = {} as Errors;
  Object.entries(data).forEach(value => {
    if (value[1].trim() === '') {
      Errors[value[0] as keyof ProductDTO] = 'Campo vazio';
    }
  });

  return Errors;
}

function normalizeData(data: ProductDTO): ProductDTO {
  return {
    ...data,
    category: data.category.toLowerCase(),
  };
}
