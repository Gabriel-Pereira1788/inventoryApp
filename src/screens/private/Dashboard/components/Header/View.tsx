import React from 'react';
import * as S from 'native-base';
import {sizes} from '../../../../../constants/sizesDevice';
import {useUser} from '../../../../../store/useUser';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {FilterDate} from '../../useViewModel';
import {useHeader} from './useViewModel';
import {RenderIF} from '../../../../../components/RenderIF/View';
export interface HeaderProps {
  salesAmount?: number;
  currentFilter: FilterDate;
}

export default function Header({salesAmount, currentFilter}: HeaderProps) {
  const user = useUser();
  const {percentage} = useHeader({salesAmount, currentFilter});
  console.log('percentage', percentage);
  return (
    <LinearGradient
      colors={['#008cff', '#56acf2', '#83c2f6']}
      style={styles.containerGradient}>
      <S.Text width="70%" fontWeight={500} color="#e8f8fa" fontSize={'3xl'} />
      <S.Box mb={10} position="relative">
        <S.Box
          position="absolute"
          height={5}
          bottom={1}
          width="40%"
          rounded={2}
          backgroundColor="#7ed1f24f"
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
          ${salesAmount || 0}
        </S.Text>
        <RenderIF condition={percentage !== ''}>
          <S.Box
            px={5}
            h={10}
            backgroundColor="#7ed1f2b9"
            borderRadius={10}
            alignItems="center"
            justifyContent="center">
            <S.Text fontWeight={500} color="#fff">
              {Number(percentage) < 0 ? percentage : `+${percentage}`}%
            </S.Text>
          </S.Box>
        </RenderIF>
      </S.HStack>
      <S.Text color="#f4f1f1db" marginLeft={5}>
        Total de vendas
      </S.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerGradient: {
    position: 'relative',
    top: 0,
    elevation: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    width: sizes.width,
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
});
