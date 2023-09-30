let equation = '';

function appendNumber(num) {
   equation += num;
   document.getElementById('result').value = equation;
}

function appendOperator(operator) {
   equation += operator;
   document.getElementById('result').value = equation;
}

function clearDisplay() {
   equation = '';
   document.getElementById('result').value = '';
}

function calculateResult() {
   try {
      const result = eval(equation);
      document.getElementById('result').value = result;
   } catch (error) {
      document.getElementById('result').value = 'Error';
   }
}