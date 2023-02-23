import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {ManageProduct} from '../../model';
import {ModalDeleteProps} from './View';

type UseModalDeleteProps = Pick<ModalDeleteProps, 'product'>;

export function useModalDelete({product}: UseModalDeleteProps) {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {mutateAsync, isLoading} = useMutation(
    () => ManageProduct.deleteProduct(product?.id_product),
    {
      onError(err) {
        console.log(err);
      },
      onSuccess(data) {
        console.log(data);
        queryClient.removeQueries(['product', product?.id_product]);
        queryClient.invalidateQueries(['products']);
        navigation.goBack();
      },
    },
  );
  async function handleDeleteProduct() {
    await mutateAsync();
  }

  return {handleDeleteProduct, isLoading};
}
