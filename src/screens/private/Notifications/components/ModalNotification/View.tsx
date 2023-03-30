import React from 'react';
import * as S from 'native-base';
import {useModalNotification} from './useViewModel';
export interface ModalNotificationProps extends S.IModalProps {
  title: string;
  textContent: string;
  date: string;
  id_notification: string;
  read: boolean;
}

export default function ModalNotification({
  title,
  textContent,
  date,
  id_notification,
  read,
  ...rest
}: ModalNotificationProps) {
  useModalNotification({read, isOpen: rest.isOpen, id_notification});
  return (
    <S.Modal {...rest}>
      <S.Modal.Content testID="modal-content" w="90%">
        <S.HStack
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          p={5}
          borderBottomWidth={1}
          borderBottomColor="#dddddd6d">
          <S.Text fontSize="lg" fontWeight="600" color="primary.300">
            {title}
          </S.Text>
          <S.Text fontSize="sm" color="a7a7a7">
            {date}
          </S.Text>
        </S.HStack>
        <S.Box p={5}>
          <S.Text
            fontWeight={500}
            textAlign="justify"
            color="#a7a7a7"
            fontSize="md">
            {textContent}
          </S.Text>
        </S.Box>
      </S.Modal.Content>
    </S.Modal>
  );
}
