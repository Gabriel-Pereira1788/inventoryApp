import React, {ReactNode} from 'react';
import * as S from 'native-base';
//*components
import {Button} from '../Button/View';
import {useNavigation} from '@react-navigation/native';

interface Props {
  onSubmit: () => Promise<void>;
  children: ReactNode;
  isRegister?: boolean;
  loading?: boolean;
}

export function Wrapper({onSubmit, children, isRegister, loading}: Props) {
  const navigation = useNavigation();
  const handleSubmit = () => {
    onSubmit();
  };

  const redirectScreen = () => {
    navigation.navigate(isRegister ? 'login' : 'register');
  };
  return (
    <S.VStack w="100%">
      <S.Text
        fontWeight="bold"
        color="#fff"
        style={{
          textShadowColor: 'rgba(7, 7, 7, 0.244)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 10,
        }}
        fontSize="4xl"
        textAlign="center">
        INVENTORY
      </S.Text>
      <S.VStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        space={3}
        mt="5%">
        {children}
        <Button
          onPress={handleSubmit}
          loading={loading}
          mt={3}
          _dark={{opacity: 1}}>
          Confirmar
        </Button>

        <S.Pressable w="100%" alignItems="flex-start" onPress={redirectScreen}>
          <S.Text
            textAlign="left"
            fontWeight={400}
            fontSize="md"
            color="text.100">
            {isRegister
              ? 'Ja possui cadastro? faça o login.'
              : 'Não possui cadastro? clique para registrar-se'}
          </S.Text>
        </S.Pressable>
      </S.VStack>
    </S.VStack>
  );
}
