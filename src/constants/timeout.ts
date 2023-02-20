export function getMinPerSec(minute: number) {
  const minutePerSecond = 60000;
  return minutePerSecond * minute;
}

export const timeout = {
  minute: getMinPerSec(1),
  fiveMinutes: getMinPerSec(5),
  tenMinutes: getMinPerSec(10),
};
