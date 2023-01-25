import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {ProductDTO} from '../../../models/Product';
import {Products} from '../../../services/modules/Products/Products';
import {useUser} from '../../../store/useUser';
import {MASKS} from '../../../utils/masks';

export function useFormProduct() {
  const user = useUser();
  const [productDTO, setProductDTO] = useState<ProductDTO>({
    id_user: '8yBTG7BGJvS8QgQJUoPrFqIMbzA2',
    name_product: '',
    price_purchased: '',
    price_saled: '',
    storage: '',
    category: '',
  });

  const queryClient = useQueryClient();

  const {mutateAsync, isLoading} = useMutation(Products.createProduct, {
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
    console.log(productDTO);
    await mutateAsync({dataProduct: productDTO});
  }

  return {productDTO, isLoading, handleChange, handleChangeCurrency, onSubmit};
}
