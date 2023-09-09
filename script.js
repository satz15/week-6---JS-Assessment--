// Write a JavaScript function to generate a random integer.

function rand(max=0, min=0){
    if(min === 0 && max === 0){
    return 0;
}
  if (min === 0) {
    return Math.floor(Math.random() * (max+1));
  }
    return Math.floor(Math.random() * (min+1)) + min;
}

console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());

// 2.Write a JavaScript program to display the current day and time in the following format 

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getDay()];

let hours = currentDate.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; 
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const formattedTime = `${hours} ${ampm} : ${minutes} : ${seconds}`;
console.log(`Today is: ${dayOfWeek}.`);
console.log(`Current time is: ${formattedTime}`);

// 3.Write a JavaScript program to get the current date.

function getCurrentDate() {
  const today = new Date();
  
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const dashFormat = `${mm}-${dd}-${yyyy}`;
  const slashFormat = `${mm}/${dd}/${yyyy}`;
  
  return {
    dashFormat,
    slashFormat
  };
}

const formattedDates = getCurrentDate();
console.log(`mm-dd-yyyy: ${formattedDates.dashFormat}`);
console.log(`mm/dd/yyyy: ${formattedDates.slashFormat}`);

// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit
// matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros
// elsewhere.

function isIdentityMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === j && matrix[i][j] !== 1) {
        return false;
      }
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  
  return true;
}

const matrix1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
const matrix2 = [[1, 0, 0], [0, 1, 0], [1, 0, 1]];

console.log(isIdentityMatrix(matrix1)); 
console.log(isIdentityMatrix(matrix2)); 

// Write a JavaScript function to check whether a string is blank or not.

function isBlank(str) {
  return str.trim().length === 0;
}

console.log(isBlank(''));   
console.log(isBlank('abc'));

// Write a JavaScript function to concatenate a given string n times (default is 1).

function repeat(str, n = 1) {
  return str.repeat(n);
}

console.log(repeat('Ha!'));   
console.log(repeat('Ha!', 2)); 
console.log(repeat('Ha!', 3)); 
 
