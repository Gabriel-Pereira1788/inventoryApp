<<<<<<< HEAD
import React from 'react';
=======
import React, {ReactNode} from 'react';
>>>>>>> development
import * as S from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useVisibleAnimation} from '../../../../../hooks/useVisibleAnimation';
import Animated from 'react-native-reanimated';

interface ContainerManagementProps {
  text: string;
<<<<<<< HEAD
}

export default function ContainerManagement({text}: ContainerManagementProps) {
  const {handleToggleVisible, visibleAnimation} = useVisibleAnimation({
    initialH: 50,
    animateH: 350,
  });
  return (
    <Animated.View style={visibleAnimation}>
      <S.Pressable
        w="100%"
        flex={1}
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="row"
        backgroundColor="transparent"
        borderWidth={2}
        py={2}
        borderRadius={5}
        borderColor="#6c6c6cc0"
        onPress={handleToggleVisible}>
        <S.Stack flexDirection="row" alignItems="center" space={5}>
          <S.Text
            bold
            fontSize="lg"
            textAlign="center"
            mr={1}
            color="#706e6ec0">
            {text}
          </S.Text>
          <MaterialIcon
            name="keyboard-arrow-down"
            color="#242323a7"
            size={25}
          />
        </S.Stack>
=======
  children?: ReactNode;
  animateH?: number | string;
}

export default function ContainerManagement({
  text,
  children,
  animateH,
}: ContainerManagementProps) {
  const {handleToggleVisible, visibleAnimation, focus} = useVisibleAnimation({
    initialH: 80,
    animateH: animateH || 350,
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
          borderWidth: 2,
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
              size={30}
            />
          </S.Stack>

          {focus && children}
        </S.VStack>
>>>>>>> development
      </S.Pressable>
    </Animated.View>
  );
}
