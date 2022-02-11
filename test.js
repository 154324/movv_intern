let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log(Object.entries(salaries).reduce((sum, salaries)=> sum + salaries[1],0))