function squareSum(numbers){
  let square = numbers.reduce((a, num) => a + ((num) ** 2), 0);
  return square
}
