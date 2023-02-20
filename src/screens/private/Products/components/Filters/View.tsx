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
          onValueChange={handleCurrentCategory}
          items={categories}
        />
        <RangeSlider
          title="Preço"
          maxValue={totalValue}
          prefix="R$"
          value={dataFilter.price}
          onChange={handleDataFilter('price')}
        />
        <RangeSlider
          title="Estoque"
          maxValue={totalStorage}
          value={dataFilter.storage}
          onChange={handleDataFilter('storage')}
        />
        <Button onPress={setFilters}>Confirmar</Button>
      </S.Modal.Content>
    </S.Modal>
  );
}
