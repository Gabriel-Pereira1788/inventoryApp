import React from 'react';
import * as S from 'native-base';
//* components
import Modal from '../../../../../components/Modal/View';
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
import {InputCurrency} from '../../../../../components/Input/components/InputCurrency';
import {Select} from '../../../../../components/Select/View';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//* hooks
import {useFormProduct} from './useViewModel';
//*constants
import {categories} from '../../../../../constants/categories';

export interface FormProductProps extends S.IModalProps {}

export default function FormProduct(props: FormProductProps) {
  const {
    productDTO,
    errors,
    isLoading,
    handleChange,
    handleChangeCurrency,
    onSubmit,
  } = useFormProduct();
  return (
    <Modal {...props}>
      <S.Box mt={15} position="absolute" top={10}>
        <MaterialIcons size={100} name="basket-plus" color="#F0DC61" />
      </S.Box>
      <S.ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        w="100%"
        mt={40}
        p={10}
        py={15}
        h="full">
        <Input
          title="Nome do produto"
          w="full"
          my={2}
          error={!!errors.name_product}
          errorMessage={errors.name_product}
          value={productDTO.name_product}
          onChangeText={handleChange('name_product')}
        />
        <InputCurrency
          title="Preço de venda"
          error={!!errors.price_saled}
          errorMessage={errors.price_saled}
          value={Number(productDTO.price_saled)}
          onChangeValue={handleChangeCurrency('price_saled')}
        />
        <InputCurrency
          title="Preço de compra"
          error={!!errors.price_purchased}
          errorMessage={errors.price_purchased}
          value={Number(productDTO.price_purchased)}
          onChangeValue={handleChangeCurrency('price_purchased')}
        />

        <Input
          title="Estoque inicial"
          my={2}
          error={!!errors.storage}
          errorMessage={errors.storage}
          value={productDTO.storage}
          onChangeText={handleChange('storage')}
        />
        <Select
          title="Categoria"
          placeholder="Selecione a categoria"
          error={!!errors.category}
          errorMessage={errors.category}
          selectedValue={productDTO.category}
          onValueChange={handleChange('category')}
          items={categories}
        />
        <Button my={10} onPress={onSubmit} loading={isLoading}>
          Confirmar
        </Button>
      </S.ScrollView>
    </Modal>
  );
}
