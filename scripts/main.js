const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const threeDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 3,
  minimumFractionDigits: 3,
});

const twoDecimal = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

/* Calculator Type Select Input */
const calcTypeSelectElem = document.querySelector('.js-calculator-type-select');

function displayCalcSelection(selectorElem) {
  let selectorNumber = selectorElem.value;
  switch(selectorNumber) {
    case "1":
      displayCompoundInterestCalc();
      break;
    case "2":
      displayDollarDripCalc();
      break;
    case "3":
      displayShareDripCalc();
      break;
    case "4":
      displayCagrCalc();
      break;
    default:
      document.querySelector('.js-input-div').innerHTML = `
        <p>ERROR</p>
      `;
  }
}

function formatColumn(array,formatType) {
  const arrayLength = array.length;
  let arrayOut = [];
  let i = 0;
  while(i<arrayLength) {
    arrayOut[i] = formatType.format(array[i]);
    i++;
  }
  return arrayOut;
}

function printColumn(array, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    outString = outString + `${array[i]}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  return outString;
}

function printLastColumn(array, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    outString = outString + `${array[i]}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  document.querySelector('.js-output-table-div').innerHTML = outString;
}

function checkNumber(value) {
  let flag = false;
  if(isNaN(value)) {
    document.querySelector('.js-output-table-div').innerHTML = 'ERROR: Enter Number Values Only';
    flag = true;
  }
  return flag;
}

function checkInteger(value) {
  let flag = false;
  if(value%1 != 0) {
    document.querySelector('.js-output-table-div').innerHTML = 'ERROR: Enter Integer Value for Years';
    flag = true;
  }
  return flag;
}

function validateInputs(array) {
  let flag = false;
  for(let i = 0; i < array.length; i++) {
    flag = checkNumber(array[i]);
    if(flag==true) {
      break;
    }
    if(i===array.length-1) {
      flag = checkInteger(array[i]);
    }
  }
  return flag;
}