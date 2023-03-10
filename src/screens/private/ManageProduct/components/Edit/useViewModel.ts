import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {ProductDTO} from '../../../../../models/Product';
import {useUser} from '../../../../../store/useUser';
import {ManageProduct} from '../../model';
import {EditProps} from './View';

export function useEdit({product, handleAlertConfig}: EditProps) {
  const queryClient = useQueryClient();
  const user = useUser();
  const manageApi = new ManageProduct(user?.uid);

  const [heightAnimated, setHeightAnimated] = useState(0);

  const {mutateAsync, isLoading} = useMutation(manageApi.updateProduct, {
    onError: err => {
      console.log(err);
      handleAlertConfig({
        isOpen: true,
        status: 'error',
        title: 'Por favor tente novamente mais tarde.',
      });
    },
    onSuccess: res => {
      console.log(res);
      queryClient.invalidateQueries(['products']);
      queryClient.refetchQueries(['product', product?.id_product]);
      handleAlertConfig({
        isOpen: true,
        status: 'success',
        title: 'Produto editado com sucesso',
      });
    },
  });

  async function onSubmit(data: ProductDTO) {
    await mutateAsync({dataProduct: data, idProduct: product!.id_product});
  }

  function handleFormSize(e: LayoutChangeEvent) {
    const {height} = e.nativeEvent.layout;
    setHeightAnimated(height);
  }

  return {isLoading, heightAnimated, onSubmit, handleFormSize};
}
