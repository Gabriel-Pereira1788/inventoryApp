import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {ProductDTO} from '../../../models/Product';
import {Products} from '../../../services/modules/Products/Products';
import {useUser} from '../../../store/useUser';
import {Form} from '../Form';

type Props = {};

export function Create({}: Props) {
  const queryClient = useQueryClient();
  const user = useUser();
  const productsApi = new Products(user?.uid);

  const {mutateAsync, isLoading} = useMutation(productsApi.create, {
    onError: err => {
      console.log(err);
    },
    onSuccess: res => {
      console.log(res);
      queryClient.refetchQueries(['products']);
    },
  });

  async function onSubmit(data: ProductDTO) {
    await mutateAsync({dataProduct: data});
  }
  return <Form onSubmit={onSubmit} loadingSubmit={isLoading} />;
}
