import React from 'react';
import {useUser} from '../../store/useUser';
//*components
import {Card} from '../Card';
//*icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
FontAwesome.loadFont();

type Props = {};

export default function UserCard({}: Props) {
  const user = useUser();
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('myAccount')}>
      <Card py={3} px={4} my="2">
        <FontAwesome name="user" size={20} />
      </Card>
    </Pressable>
  );
}
