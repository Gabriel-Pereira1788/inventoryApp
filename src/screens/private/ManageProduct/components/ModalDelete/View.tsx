import React from 'react';
import * as S from 'native-base';

import {ProductDTO} from '../../../../../models/Product';
import {Button} from '../../../../../components/Button/View';
import {sizes} from '../../../../../constants/sizesDevice';
import {useModalDelete} from './useViewModel';

export interface ModalDeleteProps extends S.IModalProps {
  product?: ProductDTO;
}
export function ModalDelete({product, ...rest}: ModalDeleteProps) {
  const {handleDeleteProduct, isLoading} = useModalDelete({product});
  return (
    <S.Modal {...rest} animationPreset="fade">
      <S.Modal.Content
        w="90%"
        height={(sizes.height / 100) * 30}
        alignItems="center"
        justifyContent="center"
        p={5}>
        <S.Stack w="100%" space={5}>
          <S.Text testID="nameProduct" color="#595656" bold>
            Tem certeza que Deseja deletar {product?.name_product}?
          </S.Text>
          <Button onPress={handleDeleteProduct} loading={isLoading}>
            Confirmar
          </Button>
        </S.Stack>
      </S.Modal.Content>
    </S.Modal>
  );
}
