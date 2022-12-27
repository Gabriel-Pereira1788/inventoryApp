import {useState} from 'react';

export function useMyAccount() {
  const [isEdit, setIsEdit] = useState(false);

  function toggleIsEdit() {
    setIsEdit(!isEdit);
  }

  return {isEdit, toggleIsEdit};
}
