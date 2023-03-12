import {useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SendMessageProps} from './View';

export function useSendMessage({onSend}: SendMessageProps) {
  const [message, setMessage] = useState('');

  const pressed = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: withSpring(pressed.value ? 0.8 : 1)}],
  }));

  function handleSend() {
    onSend(message);
    setMessage('');
  }

  function handleChange(value: string) {
    setMessage(value);
  }

  return {message, pressed, animatedStyle, handleSend, handleChange};
}
