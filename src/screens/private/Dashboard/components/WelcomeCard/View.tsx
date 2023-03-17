import React from 'react';
import * as S from 'native-base';
import {sizes} from '../../../../../constants/sizesDevice';
import {useUser} from '../../../../../store/useUser';
interface WelcomeCardProps {}

export default function WelcomeCard({}: WelcomeCardProps) {
  const user = useUser();
  return (
    <S.VStack
      position="relative"
      top={0}
      shadow={5}
      width={sizes.width}
      height="80"
      backgroundColor="#1fb3ee"
      borderBottomRadius={45}
      justifyContent="flex-end"
      py={5}
      px={8}
      alignItems="flex-start">
      <S.Text width="70%" fontWeight={500} color="#e8f8fa" fontSize={'3xl'} />
      <S.Box mb={10} position="relative">
        <S.Box
          position="absolute"
          height={5}
          bottom={1}
          width="40%"
          rounded={2}
          backgroundColor="#2989b0"
        />
        <S.Text
          fontWeight={500}
          color="#e8f8fa"
          fontSize={'3xl'}
          textTransform="capitalize">
          Seja bem vindo, {user?.name}
        </S.Text>
      </S.Box>
      <S.HStack w="100%" justifyContent="space-between" alignItems="center">
        <S.Text bold fontSize="4xl" color="#e8f8fa" shadow={4}>
          $128.000
        </S.Text>
        <S.Box
          px={5}
          h={10}
          backgroundColor="#2989b0"
          borderRadius={10}
          alignItems="center"
          justifyContent="center">
          <S.Text fontWeight={500} color="#fff">
            + 2.5%
          </S.Text>
        </S.Box>
      </S.HStack>
      <S.Text color="#f4f1f1db" marginLeft={5}>
        Total de vendas
      </S.Text>
    </S.VStack>
  );
}
