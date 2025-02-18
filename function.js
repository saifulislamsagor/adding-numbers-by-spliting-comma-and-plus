const addingNumbers = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };
  
  const gettingNumbers = () => {
    const inputNumber = document.getElementById("inputNumber").value;
    const result = document.getElementById("result");
  
  
    let numbersArray;
  
  
    if (inputNumber.includes(",")) {
      numbersArray = inputNumber.split(",").map((num) => Number(num.trim()));
    } else if (inputNumber.includes("+")) {
      numbersArray = inputNumber.split("+").map((num) => Number(num.trim()));
    } else {
      numbersArray = [Number(inputNumber.trim())];
    }
  
  
  
    result.innerText =`The sum of the number is ${addingNumbers(...numbersArray)}`;
  
  
  
  };
  
  
  //"enter" event listener
  document.getElementById("inputNumber").addEventListener("keydown",(e)=>{
      if(e.key === "Enter"){
          gettingNumbers();
      }
  } );