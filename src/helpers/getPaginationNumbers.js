export default (currentPage, isMax) => {
  const numbers = [];
  if (currentPage === 2) {
    numbers.push(currentPage);
    numbers.push(currentPage + 1);
  } else if (currentPage === 1) {
    numbers.push(currentPage + 1);
    numbers.push(currentPage + 2);
  } else if (isMax) {
    numbers.push(currentPage - 1);
    numbers.push(currentPage);
  } else {
    numbers.push(currentPage - 1);
    numbers.push(currentPage);
    numbers.push(currentPage + 1);
  }
  return numbers;
};
