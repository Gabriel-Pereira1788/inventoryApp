import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useModal} from '../../../../../hooks/useModal';
import {ProductDTO} from '../../../../../models/Product';
import {useContextProducts} from '../../View';

interface AddProductProps {}

export function useAddProduct({}: AddProductProps) {
  const {isOpen, handleToggleState} = useModal();
  const {productsApi} = useContextProducts();

  const pressed = useSharedValue(false);
  const uas = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });

  const queryClient = useQueryClient();

  const {mutateAsync, isLoading: loadingSubmit} = useMutation(
    productsApi.create,
    {
      onError: err => {
        console.log(err);
      },
      onSuccess: res => {
        console.log(res);
        queryClient.refetchQueries(['products']);
        queryClient.invalidateQueries(['statistics']);
        handleToggleState();
      },
    },
  );

  async function onSubmit(data: ProductDTO) {
    await mutateAsync({dataProduct: data});
  }

  return {isOpen, handleToggleState, onSubmit, pressed, uas, loadingSubmit};
}
