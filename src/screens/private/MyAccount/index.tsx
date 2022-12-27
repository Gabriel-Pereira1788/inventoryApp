import {Box, Image} from 'native-base';
import React from 'react';
//*components
import {Card} from '../../../components/Card';
import {SharedLayout} from '../../../components/SharedLayout';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialIcons.loadFont();

type Props = {};

export default function MyAccount({}: Props) {
  return (
    <SharedLayout>
      <Card px={4} py={3} position="relative">
        <Image
          width={100}
          height={100}
          rounded="full"
          alt="imageuser"
          source={{
            uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          }}
        />
        <Box position="absolute" bottom={-10} right={-10}>
          <MaterialIcons name="pencil" color="#F0DC61" size={30} />
        </Box>
      </Card>
    </SharedLayout>
  );
}
