import React from 'react';
import * as S from 'native-base';
import {SharedLayout} from '../../../components/SharedLayout';
type Props = {};

export default function Notifications({}: Props) {
  return (
    <SharedLayout currentPath="notifications">
      <S.Text>teste</S.Text>
    </SharedLayout>
  );
}
