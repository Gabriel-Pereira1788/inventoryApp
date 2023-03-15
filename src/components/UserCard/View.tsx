import React from 'react';
//*store
import {useUser} from '../../store/useUser';

//*icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {RenderIF} from '../RenderIF/View';
import {UserCircle} from 'phosphor-react-native';
import {TouchableOpacity} from 'react-native';
FontAwesome.loadFont();

export default function UserCard() {
  const user = useUser();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginVertical: 10}}
      onPress={() => navigation.navigate('myAccount')}>
      <RenderIF
        condition={!!user?.photoURL}
        RenderComponent={() => (
          <UserCircle size={40} color="#969393" weight="light" />
        )}>
        <Image
          width={42}
          height={42}
          rounded="full"
          alt="imageuser"
          source={{
            uri: user!.photoURL!,
          }}
        />
      </RenderIF>
    </TouchableOpacity>
  );
}
