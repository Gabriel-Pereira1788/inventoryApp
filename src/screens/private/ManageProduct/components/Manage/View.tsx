import React from 'react';
import * as S from 'native-base';
import ContainerManagement from '../ContainerManagement/View';
//*components
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
//*hooks
import {useManage} from './useViewModel';
//*Model
import {Product} from '../../../../../models/Product';
import {AlertConfig} from '../../../../../hooks/useAlert';

export interface ManageProps {
  product: Product;
  handleAlertConfig: (alert: AlertConfig) => void;
}

export default function Manage(props: ManageProps) {
  const {manageForm, handleManageForm, handleSubmitForm} = useManage({
    ...props,
  });

  return (
    <ContainerManagement text="Gerenciar">
      <S.Stack space={3} w="100%">
        <Input
          title="Peças que sairam"
          value={manageForm.salesPieces}
          onChangeText={value => handleManageForm(value, 'salesPieces')}
          testID="inputPurchased"
        />
        <Input
          title="Peças que entraram"
          value={manageForm.purchasedPieces}
          onChangeText={value => handleManageForm(value, 'purchasedPieces')}
          testID="inputSales"
        />
        <Button onPress={handleSubmitForm}>Confirmar</Button>
      </S.Stack>
    </ContainerManagement>
  );
}
