import React from 'react';
import * as S from 'native-base';
//* components

import {Input} from '../Input/View';
import {InputCurrency} from '../Input/components/InputCurrency';
import {Select} from '../Select/View';
import {Button} from '../Button/View';

//* hooks
import {useFormProduct} from './useViewModel';
//*constants
import {categories} from '../../constants/categories';
import {ProductDTO} from '../../models/Product';
import {Image as ImageIcon} from 'phosphor-react-native';
import {sizes} from '../../constants/sizesDevice';
import {TouchableOpacity} from 'react-native';
import {RenderIF} from '../RenderIF/View';

export interface FormProductProps extends S.IStackProps {
  onSubmit: (data: ProductDTO) => Promise<void>;
  loadingSubmit: boolean;
  initialValue?: ProductDTO;
}

export function FormProduct({
  onSubmit,
  loadingSubmit,
  initialValue,
  ...rest
}: FormProductProps) {
  const {
    productDTO,
    errors,
    handleChange,
    handleChangeCurrency,
    handleSubmit,
    handleSetImage,
  } = useFormProduct({onSubmit, initialValue});
  return (
    <S.VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="full"
      {...rest}>
      <TouchableOpacity onPress={handleSetImage}>
        <RenderIF
          condition={!productDTO.path_image}
          RenderComponent={() => (
            <S.Image
              source={{uri: productDTO.path_image}}
              width={(sizes.width / 100) * 30}
              height={(sizes.width / 100) * 30}
              rounded="full"
              alt="image-product"
            />
          )}>
          <S.Circle
            p={5}
            position="relative"
            backgroundColor="#fff"
            width={(sizes.width / 100) * 30}
            height={(sizes.width / 100) * 30}
            borderWidth={2}
            borderColor="#868585">
            <ImageIcon
              size={(sizes.width / 100) * 15}
              color="#123D42"
              weight="light"
            />
          </S.Circle>
        </RenderIF>
      </TouchableOpacity>
      <Input
        testID="name"
        title="Nome do produto"
        w="full"
        my={2}
        error={!!errors.name_product}
        errorMessage={errors.name_product}
        value={productDTO.name_product}
        onChangeText={handleChange('name_product')}
      />
      <InputCurrency
        testID="price_saled"
        title="Preço de venda"
        error={!!errors.price_saled}
        errorMessage={errors.price_saled}
        value={Number(productDTO.price_saled)}
        onChangeValue={handleChangeCurrency('price_saled')}
      />
      <InputCurrency
        testID="price_purchased"
        title="Preço de compra"
        error={!!errors.price_purchased}
        errorMessage={errors.price_purchased}
        value={Number(productDTO.price_purchased)}
        onChangeValue={handleChangeCurrency('price_purchased')}
      />

      <Input
        testID="storage"
        title="Estoque inicial"
        my={2}
        error={!!errors.storage}
        errorMessage={errors.storage}
        value={String(productDTO.storage)}
        keyboardType="number-pad"
        onChangeText={handleChange('storage')}
      />
      <Select
        testID="category"
        title="Categoria"
        placeholder="Selecione a categoria"
        error={!!errors.category}
        errorMessage={errors.category}
        selectedValue={productDTO.category}
        onValueChange={handleChange('category')}
        items={categories}
      />
      <Button
        testID="confirm-button"
        my={10}
        onPress={handleSubmit}
        loading={loadingSubmit}>
        Confirmar
      </Button>
    </S.VStack>
  );
}
