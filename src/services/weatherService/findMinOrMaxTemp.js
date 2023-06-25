
export const findMinOrMaxTemp = (
  weatherList,
  start,
  action,
  initial = 0
) => {
  let target = initial;

  for (let i = start; i < start + 8; i++) {
    target = action === "max"
      ? Math.max(target, weatherList[i].main.temp_max)
      : Math.min(target, weatherList[i].main.temp_min)
  }

  return target;
};