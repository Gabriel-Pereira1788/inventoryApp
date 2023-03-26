import React from 'react';
import * as S from 'native-base';
import {RenderIF} from '../RenderIF/View';
import {useAlert} from './useViewModel';

interface AlertProps extends S.IAlertProps {
  text?: string;
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Alert({...rest}: AlertProps) {
  const {alertConfig, onClose} = useAlert();

  return (
    <S.HStack
      position="absolute"
      top={'10%'}
      w="100%"
      alignItems="center"
      justifyContent="center"
      px={10}>
      <RenderIF condition={alertConfig.isOpen}>
        <S.Alert {...rest} w={'100%'}>
          <S.VStack space={2} flexShrink={1} w="100%">
            <S.HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between">
              <S.HStack flexShrink={1} space={2} alignItems="center">
                <S.Alert.Icon />
                <S.Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  {alertConfig.title}
                </S.Text>
              </S.HStack>
              <S.IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<S.CloseIcon size="3" />}
                onPress={onClose}
                _icon={{
                  color: 'coolGray.600',
                }}
              />
            </S.HStack>
            <S.Box
              pl="6"
              _text={{
                color: 'coolGray.600',
              }}>
              {alertConfig.text}
            </S.Box>
          </S.VStack>
        </S.Alert>
      </RenderIF>
    </S.HStack>
  );
}
