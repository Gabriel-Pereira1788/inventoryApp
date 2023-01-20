import React from 'react';
import * as S from 'native-base';
//* components
import Modal from '../Modal';
import {Input} from '../Input';

interface Props extends S.IModalProps {}

export default function FormProduct(props: Props) {
  return (
    <Modal {...props}>
      <S.VStack flex={1} w="100%">
        <Input title="Nome do produto" w="full" />
        <Input title="Preço de venda" w="100%" />
        <Input title="Preço de compra" />
        <Input title="Categoria" />
      </S.VStack>
    </Modal>
  );
}
