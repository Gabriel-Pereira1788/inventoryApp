import React, {ReactNode} from 'react';
import * as S from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useVisibleAnimation} from '../../../../../hooks/useVisibleAnimation';
import Animated from 'react-native-reanimated';

interface ContainerManagementProps {
  text: string;
  children?: ReactNode;
}

export default function ContainerManagement({
  text,
  children,
}: ContainerManagementProps) {
  const {handleToggleVisible, visibleAnimation, focus} = useVisibleAnimation({
    initialH: 80,
    animateH: 350,
  });
  return (
    <Animated.View
      style={[
        visibleAnimation,
        {
          overflow: 'hidden',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          borderColor: '#6c6c6c2a',
          borderWidth: 1,
          borderRadius: 10,
          paddingVertical: 12,
        },
      ]}>
      <S.Pressable width="100%" onPress={handleToggleVisible}>
        <S.VStack w="100%" p={3} alignItems="center" justifyContent="center">
          <S.Stack flexDirection="row" alignItems="center" space={5}>
            <S.Text
              bold
              fontSize="lg"
              textAlign="center"
              mr={1}
              color="#b8b5b52a0">
              {text}
            </S.Text>
            <MaterialIcon
              name="keyboard-arrow-down"
              color="#242323a7"
              size={25}
            />
          </S.Stack>

          {focus && children}
        </S.VStack>
      </S.Pressable>
    </Animated.View>
  );
}
