import React from 'react';
import * as S from 'native-base';
import ContainerManagement from '../ContainerManagement/View';
//*components
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
//*hooks
import {useManage} from './useViewModel';
//*Model
import {ProductDTO} from '../../../../../models/Product';
import {AlertConfig} from '../../../../../hooks/useAlert';

export interface ManageProps {
  product?: ProductDTO;
  handleAlertConfig: (alert: AlertConfig) => void;
}

export default function Manage(props: ManageProps) {
  const {manageForm, loading, handleManageForm, handleSubmitForm} = useManage({
    ...props,
  });

  return (
    <ContainerManagement text="Gerenciar">
      <S.Stack space={3} w="100%" py={5}>
        <Input
          title="Peças que sairam"
          value={manageForm.salesPieces}
          keyboardType="numeric"
          onChangeText={value => handleManageForm(value, 'salesPieces')}
          testID="inputPurchased"
        />
        <Input
          title="Peças que entraram"
          keyboardType="numeric"
          value={manageForm.purchasedPieces}
          onChangeText={value => handleManageForm(value, 'purchasedPieces')}
          testID="inputSales"
        />
        <Button onPress={handleSubmitForm} loading={loading}>
          Confirmar
        </Button>
      </S.Stack>
    </ContainerManagement>
  );
}
