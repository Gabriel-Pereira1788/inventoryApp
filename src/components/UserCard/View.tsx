import React from 'react';
//*store
import {useUser} from '../../store/useUser';

//*icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box, Image} from 'native-base';
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
      testID="user-card"
      style={{marginVertical: 10}}
      onPress={() => navigation.navigate('myAccount')}>
      <RenderIF
        condition={!!user && !!user?.photoURL}
        RenderComponent={() => (
          <Box testID="user-circle">
            <UserCircle size={40} color="#969393" weight="light" />
          </Box>
        )}>
        <Image
          width={42}
          height={42}
          rounded="full"
          testID="image-user"
          alt="imageuser"
          source={{
            uri: user && user!.photoURL!,
          }}
        />
      </RenderIF>
    </TouchableOpacity>
  );
}
