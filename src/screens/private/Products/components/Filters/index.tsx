import React, {useMemo} from 'react';
import * as S from 'native-base';
import {Select} from '../../../../../components/Select';
import {categories} from '../../../../../constants/categories';
import {RangeSlider} from '../../../../../components/RangeSlider';
import {useContextProducts} from '../..';

interface FiltersProps extends S.IModalProps {}

export function Filters({...rest}: FiltersProps) {
  const {products} = useContextProducts();

  const totalValue = useMemo(() => {
    if (products && products.length > 0) {
      return products.reduce((acc, {product}) => {
        acc += product.price_saled;
        return acc;
      }, 0);
    }
    return 0;
  }, [products]);

  return (
    <S.Modal {...rest}>
      <S.Modal.Content p={5} w="90%">
        <S.Text>Teste</S.Text>
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
          items={[
            ...categories,
            {id: Math.random(), label: 'Todas', value: 'todas'},
          ]}
        />
        <RangeSlider title="teste" maxValue={totalValue} />
      </S.Modal.Content>
    </S.Modal>
  );
}
