import React from 'react';
import * as S from 'native-base';
//*components
import {Select} from '../../../../../components/Select/View';
import {categories} from '../../../../../constants/categories';
import {RangeSlider} from '../../../../../components/RangeSlider/View';
import {Button} from '../../../../../components/Button/View';
//*hooks
import {useFilter} from './useViewModel';

export interface FiltersProps extends S.IModalProps {}

export function Filters({...rest}: FiltersProps) {
  const {
    dataFilter,
    totalStorage,
    totalValue,
    currentCategory,
    handleDataFilter,
    handleCurrentCategory,
    setFilters,
  } = useFilter({onClose: rest.onClose});

  return (
    <S.Modal {...rest}>
      <S.Modal.Content p={5} w="90%">
        <S.Text fontSize="lg" fontWeight="semibold">
          Filtros
        </S.Text>
        <Select
          borderWidth={0}
          borderBottomWidth={1}
          style={{backgroundColor: 'transparent'}}
          _light={{
            backgroundColor: 'transparent',
          }}
          _dark={{
            backgroundColor: 'transparent',
          }}
          placeholder="Categorias"
          fontWeight="bold"
          color="#000"
          selectedValue={currentCategory}
          onValueChange={handleCurrentCategory}
          items={categories}
        />
        <RangeSlider
          testID="price-slider"
          title="Preço"
          maxValue={totalValue}
          prefix="R$"
          value={dataFilter.price}
          onChange={value => handleDataFilter('price', value)}
        />
        <RangeSlider
          testID="storage-slider"
          title="Estoque"
          maxValue={totalStorage}
          value={dataFilter.storage}
          onChange={value => handleDataFilter('storage', value)}
          step={1}
        />
        <Button onPress={setFilters} testID="button-apply-filter">
          Confirmar
        </Button>
      </S.Modal.Content>
    </S.Modal>
  );
}
