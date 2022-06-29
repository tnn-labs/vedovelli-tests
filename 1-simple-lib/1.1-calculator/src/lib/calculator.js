module.exports.sum = (param1, param2) => {
  const num1 = parseInt(param1, 10); 
  const num2 = parseInt(param2, 10); 

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('Please check ypur input');
  }

  return num1 + num2;
};