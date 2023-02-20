import {useContextProducts} from '../../View';

export function useControllers() {
  const {searchText, setSearchText} = useContextProducts();

  function handleSearch(value: string) {
    setSearchText(value);
  }

  return {searchText, handleSearch};
}
