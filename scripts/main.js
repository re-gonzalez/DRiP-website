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

/* Collect input elements from compound interest calculator */
const initPrincipalElem        = document.querySelector('.js-initial-principal-input');
const monthlyContributionCElem = document.querySelector('.js-compound-monthly-input');
const apyPercentElem           = document.querySelector('.js-apy-input');
const totalYearsCElem          = document.querySelector('.js-compound-years-input');
const compFrequElem            = document.querySelector('.js-compound-frequency-select');

/* Collect input elements from DRiP calculator */
const initInvestmentElem = document.querySelector('.js-initial-investment-input');
const initStockPriceElem = document.querySelector('.js-initial-stock-price-input');
const initDividendElem   = document.querySelector('.js-initial-dividend-input');
const divFreqElem        = document.querySelector('.js-dividend-frequency-select');
const stockGrowthElem    = document.querySelector('.js-stock-growth-input');
const divGrowthElem      = document.querySelector('.js-dividend-growth-input');
const totalYearsDElem    = document.querySelector('.js-drip-years-input');
const monthlyContributionDElem = document.querySelector('.js-drip-monthly-input');

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