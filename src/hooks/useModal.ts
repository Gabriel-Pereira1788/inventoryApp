import {useState} from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleState() {
    setIsOpen(!isOpen);
  }

  return {isOpen, handleToggleState};
}
