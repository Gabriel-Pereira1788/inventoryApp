import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {ProductDTO} from '../../../../../models/Product';
import {useUser} from '../../../../../store/useUser';
import {MASKS} from '../../../../../utils/masks';
import {useContextProducts} from '../../View';
4;

type Errors = {[name in keyof ProductDTO]: string};

export function useFormProduct() {
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

  const {productsApi} = useContextProducts();
  const queryClient = useQueryClient();

  const {mutateAsync, isLoading} = useMutation(productsApi.create, {
    onError: err => {
      console.log(err);
    },
    onSuccess: res => {
      console.log(res);
      queryClient.refetchQueries(['products']);
    },
  });

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

  async function onSubmit() {
    // console.log(productDTO);

    const Errors = validationData(productDTO);

    if (Errors) {
      setErrors(Errors);
      return;
    }
    const normalizedData = normalizeData(productDTO);
    await mutateAsync({dataProduct: normalizedData});
  }

  return {
    productDTO,
    isLoading,
    errors,
    handleChange,
    handleChangeCurrency,
    onSubmit,
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
