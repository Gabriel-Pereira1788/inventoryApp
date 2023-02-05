import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {ProductDTO} from '../../../../../models/Product';
import {useUser} from '../../../../../store/useUser';
import {MASKS} from '../../../../../utils/masks';
import {useContextProducts} from '../../View';

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
    await mutateAsync({dataProduct: productDTO});
  }

  return {productDTO, isLoading, handleChange, handleChangeCurrency, onSubmit};
}
