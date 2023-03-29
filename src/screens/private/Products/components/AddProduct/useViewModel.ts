import {useMutation, useQueryClient} from '@tanstack/react-query';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useModal} from '../../../../../hooks/useModal';
import {useStorage} from '../../../../../hooks/useStorage';
import {ProductDTO} from '../../../../../models/Product';
import {useContextProducts} from '../../View';

interface AddProductProps {}

export function useAddProduct({}: AddProductProps) {
  const {isOpen, handleToggleState} = useModal();
  const {productsApi} = useContextProducts();
  const {saveImage} = useStorage();

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
      onError: () => {},
      onSuccess: () => {
        queryClient.refetchQueries(['products']);
        queryClient.invalidateQueries(['statistics']);
        handleToggleState();
      },
    },
  );

  async function onSubmit(data: ProductDTO) {
    await saveImage(data.path_image, async url => {
      console.log('url-firebase', url);
      await mutateAsync({
        dataProduct: {
          ...data,
          path_image: url,
        },
      });
    });
  }

  return {isOpen, handleToggleState, onSubmit, pressed, uas, loadingSubmit};
}
