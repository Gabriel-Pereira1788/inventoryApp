import React, {ReactNode} from 'react';
import {VStack, Text} from 'native-base';
//*components
import {Button} from '../Button';

interface Props {
  onSubmit: () => Promise<void>;
  title: string;
  children: ReactNode;
  loading?: boolean;
}

export function Wrapper({onSubmit, children, title, loading}: Props) {
  const handleSubmit = () => {
    onSubmit();
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
        p={2}>
        {children}
        <Button onPress={handleSubmit} loading={loading}>
          Confirmar
        </Button>
      </VStack>
    </VStack>
  );
}
