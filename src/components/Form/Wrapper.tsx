import React, {ReactNode} from 'react';
import {VStack, Text} from 'native-base';
import {Button} from '../Button';
import {useColorMode} from 'native-base';

interface Props {
  onSubmit: () => Promise<void>;
  title: string;
  children: ReactNode;
}

export function Wrapper({onSubmit, children, title}: Props) {
  const {toggleColorMode} = useColorMode();
  const handleSubmit = () => {
    onSubmit();
    toggleColorMode();
  };
  return (
    <VStack
      p={3}
      _light={{backgroundColor: 'white'}}
      _dark={{backgroundColor: 'dark.300'}}
      w="100%"
      rounded="xl"
      shadow={'1'}>
      <Text
        fontWeight="bold"
        color="primary.300"
        _light={{color: 'primary.300'}}
        _dark={{color: '#fff'}}
        fontSize="3xl"
        textAlign="center">
        {title}
      </Text>
      <VStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        space={3}
        mt="5%"
        p={4}>
        {children}
        <Button onPress={handleSubmit}>Confirmar</Button>
      </VStack>
    </VStack>
  );
}
