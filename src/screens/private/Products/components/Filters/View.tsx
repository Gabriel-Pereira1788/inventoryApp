import React from 'react';
import * as S from 'native-base';
//*components
import {Select} from '../../../../../components/Select/View';
import {categories} from '../../../../../constants/categories';
import {RangeSlider} from '../../../../../components/RangeSlider/View';
import {Button} from '../../../../../components/Button/View';
//*hooks
import {useFilter} from './useViewModel';
import {FiltersProps} from './view.models';

export function Filters({...rest}: FiltersProps) {
  const {dataFilter, totalStorage, totalValue, handleDataFilter} = useFilter();

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
        <Button>Confirmar</Button>
      </S.Modal.Content>
    </S.Modal>
  );
}
