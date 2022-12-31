import React from 'react';
import {useUser} from '../../store/useUser';
//*components
import {Card} from '../Card';
//*icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Image, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
FontAwesome.loadFont();

type Props = {};

export default function UserCard({}: Props) {
  const user = useUser();
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('myAccount')} my={'2%'}>
      <Image
        width={42}
        height={42}
        rounded="full"
        alt="imageuser"
        source={{
          uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}
      />
    </Pressable>
  );
}
