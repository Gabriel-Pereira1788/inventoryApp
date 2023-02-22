import React from 'react';
import * as S from 'native-base';
//*components
import {FormProduct} from '../../../../../components/FormProduct/View';
import ContainerManagement from '../ContainerManagement/View';
import {ProductDTO} from '../../../../../models/Product';
//*hooks
import {AlertConfig} from '../../../../../hooks/useAlert';
import {useEdit} from './useViewModel';

export interface EditProps {
  product?: ProductDTO;
  handleAlertConfig: (alert: AlertConfig) => void;
}

export function Edit(props: EditProps) {
  const {isLoading, heightAnimated, onSubmit, handleFormSize} = useEdit(props);

  return (
    <ContainerManagement text="Editar" animateH={heightAnimated}>
      <S.Box py={10} w="100%" onLayout={handleFormSize}>
        <FormProduct
          loadingSubmit={isLoading}
          onSubmit={onSubmit}
          flex={0}
          height="auto"
          initialValue={props.product}
        />
      </S.Box>
    </ContainerManagement>
  );
}
