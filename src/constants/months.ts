export const MONTHS_DATA = [
  'janeiro',
  'feveireiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
] as const;

export type months = typeof MONTHS_DATA[number];

export const DAY_FORMAT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
