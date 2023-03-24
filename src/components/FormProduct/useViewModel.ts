/* eslint-disable no-extra-boolean-cast */
import {useState} from 'react';
import {usePicker} from '../../hooks/usePicker';
import {useStorage} from '../../hooks/useStorage';
import {ProductDTO} from '../../models/Product';
import {useUser} from '../../store/useUser';
import {MASKS} from '../../utils/masks';
import {FormProductProps} from './View';

export type Errors = {[name in keyof ProductDTO]: string};

type UseFormProductProps = Pick<FormProductProps, 'onSubmit' | 'initialValue'>;

export function useFormProduct({onSubmit, initialValue}: UseFormProductProps) {
  const user = useUser();
  const [productDTO, setProductDTO] = useState<ProductDTO>(
    initialValue || {
      path_image: '',
      id_user: user?.uid,
      name_product: '',
      price_purchased: '',
      price_saled: '',
      storage: '',
      category: '',
    },
  );
  const [errors, setErrors] = useState({} as Errors);

  const {getImageLibrary} = usePicker();

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

  async function handleSetImage() {
    const file = await getImageLibrary();
    if (file) {
      setProductDTO(prev => ({...prev, path_image: file}));
    }
  }

  async function handleSubmit() {
    const Errors = validationData(productDTO);

    if (Object.values(Errors).length > 0) {
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
    getImageLibrary,
    handleSubmit,
    handleSetImage,
  };
}

function validationData(data: ProductDTO) {
  let Errors = {} as Errors;

  for (let value of Object.entries(data)) {
    if (String(value[1]).trim() === '') {
      Errors[value[0] as keyof ProductDTO] = 'Campo vazio';
    }
  }

  return Errors;
}

function normalizeData(data: ProductDTO): ProductDTO {
  return {
    ...data,
    category: data.category.toLowerCase(),
  };
}
