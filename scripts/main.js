const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
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


function printYearsColumn(years) {
  outString = `
    <div class="output-column-div">
      <p class="column-text">Year<br><br>
    `;
  let i = 0;
  while(i<years+1) {
    outString = outString + `${i}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  return outString;
}

function printNextColumn(array, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    outString = outString + `${twoDecimalUSD.format(array[i])}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  return outString;
}

function printLastColumn(array, freq, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    if(i % freq === 0) {
      outString = outString + `${twoDecimalUSD.format(array[i])}<br><br>`;
    }
    i++;
  }
  outString = outString + `</p></div>`;
  document.querySelector('.js-output-table-div').innerHTML = outString;
}