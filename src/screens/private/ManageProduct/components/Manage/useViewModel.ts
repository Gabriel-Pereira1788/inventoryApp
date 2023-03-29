import {useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {useState} from 'react';
import {alertRef} from '../../../../../components/Alert/useViewModel';
import {useUser} from '../../../../../store/useUser';
import {MASKS} from '../../../../../utils/masks';
import {ManageProduct} from '../../model';
import {ManageProps} from './View';

type UseManageProps = Pick<ManageProps, 'product'>;

export function useManage({product}: UseManageProps) {
  const user = useUser();
  const queryClient = useQueryClient();
  const manageProductApi = new ManageProduct(user?.uid);
  const [loading, setLoading] = useState(false);

  const [manageForm, setManageForm] = useState({
    salesPieces: '0',
    purchasedPieces: '0',
  });

  function handleManageForm(value: string, key: keyof typeof manageForm) {
    const formatedValue = MASKS.someNumbers(value);
    setManageForm(prev => ({...prev, [key]: formatedValue}));
  }

  async function handleSubmitForm() {
    if (Number(manageForm.salesPieces) > Number(product!.storage)) {
      alertRef.current?.configAlert({
        isOpen: true,
        status: 'warning',
        title: 'Estoque baixo',
        text: 'O numero de peças vendidas não pode ser maior que o estoque, por favor reponha o estoque antes de continuar',
      });
      return;
    }
    setLoading(true);
    try {
      if (Number(manageForm.salesPieces) > 0) {
        await manageProductApi.saleProduct(
          product!,
          Number(manageForm.salesPieces),
        );
      }

      if (Number(manageForm.purchasedPieces) > 0) {
        await manageProductApi.purchaseProduct(
          product!,
          Number(manageForm.purchasedPieces),
        );
      }

      queryClient.invalidateQueries(['products']);
      queryClient.invalidateQueries(['statistics']);
      queryClient.refetchQueries(['product']);
      alertRef.current?.configAlert({
        isOpen: true,
        status: 'success',
        title: 'Estoque atualizado com sucesso!.',
      });
    } catch (error) {
      const Error = error as AxiosError;
      alertRef.current?.configAlert({
        isOpen: true,
        status: 'error',
        title: Error.message,
        text: 'Error',
      });
    } finally {
      setLoading(false);
    }
  }

  return {manageForm, loading, handleManageForm, handleSubmitForm};
}
