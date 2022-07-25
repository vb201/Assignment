export const NumberFormatter = (num) => {
  if (num > 999) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
};
