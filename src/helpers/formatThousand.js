/* eslint-disable import/no-anonymous-default-export */
export default (number = 0) => {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
};
