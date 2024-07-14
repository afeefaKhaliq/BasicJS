const sum = (numbers) => {
    return numbers.reduce((sum, num) => {
      // Check if the number is even
      if (num % 2 === 0) {
        return sum + num;
      } else {
        return sum;
      }
    }, 0); // Initial value of sum is 0
  };
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sum(numbers)); 
  