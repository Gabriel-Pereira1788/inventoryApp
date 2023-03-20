import React, {ReactNode} from 'react';
import * as S from 'native-base';
//*components
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ArrowRight} from 'phosphor-react-native';
import {RenderIF} from '../RenderIF/View';

interface Props {
  onSubmit: () => Promise<void>;
  children: ReactNode;
  isRegister?: boolean;
  loading?: boolean;
  submitText?: string;
}

export function Wrapper({
  onSubmit,
  children,
  isRegister,
  loading,
  submitText,
}: Props) {
  const navigation = useNavigation();
  const handleSubmit = () => {
    onSubmit();
  };

  const redirectScreen = () => {
    navigation.navigate(isRegister ? 'login' : 'register');
  };
  return (
    <S.VStack w="100%">
      <S.VStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        space={3}
        px={10}
        pb={5}>
        {children}
        <S.HStack w="100%" alignItems="center" justifyContent="space-between">
          <S.Text fontWeight={'400'} fontSize="2xl">
            {submitText}
          </S.Text>
          <TouchableOpacity disabled={loading} onPress={handleSubmit}>
            <S.Circle
              size={30}
              shadow={1}
              p={7}
              backgroundColor="#54595D"
              alignItems="center"
              justifyContent="center">
              <RenderIF
                condition={!loading}
                RenderComponent={() => (
                  <S.Spinner color="gray.300" size="sm" />
                )}>
                <ArrowRight size={25} color="#f4f7f3" weight="thin" />
              </RenderIF>
            </S.Circle>
          </TouchableOpacity>
        </S.HStack>

        <S.Pressable w="100%" alignItems="flex-start" onPress={redirectScreen}>
          <S.Text
            textAlign="left"
            fontWeight={500}
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
