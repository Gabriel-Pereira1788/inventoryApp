function someNumbers(value: string) {
  if (isNaN(Number(value))) {
    return '';
  }

  return value;
}

function currency(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const MASKS = {
  someNumbers,
  currency,
};
