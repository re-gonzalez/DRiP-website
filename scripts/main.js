const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const initPrincipalElem = document.querySelector('.js-initial-principal-input');
const monthlyContributionElem = document.querySelector('.js-monthlyc-input');
const apyPercentElem = document.querySelector('.js-apy-input');
const totalYearsElem = document.querySelector('.js-years-input');
const compFrequElem = document.querySelector('.js-frequency-select');

function calculateCompoundInterest() {
  const initPrincipal = Number(initPrincipalElem.value);
  const monthlyContribution = Number(monthlyContributionElem.value) || 0;
  const apyPercent = Number(apyPercentElem.value);
  const totalYears = Number(totalYearsElem.value);
  const compFreq = Number(compFrequElem.value);
  
  let i = 0;
  let currentPrincipal = [initPrincipal];
  while(i<(totalYears*compFreq)) {
    currentPrincipal[i+1] = currentPrincipal[i]*(1+(apyPercent/(100*compFreq))) + monthlyContribution*(12/compFreq);
    i++;
  }
  
  outString = twoDecimalUSD.format(currentPrincipal[currentPrincipal.length - 1]);

  document.querySelector('.js-final-value-text').innerHTML = outString;

  printCompoundInterestColumn(currentPrincipal,compFreq);
  printYearsColumn(totalYears);
}

function printCompoundInterestColumn(array, freq) {
  const arrayLength = array.length;
  outString = '';
  let i = 0;
  while(i<arrayLength) {
    if(i % freq === 0) {
      outString = outString + `${twoDecimalUSD.format(array[i])}<br><br>`;
    }
    i++;
  }
  document.querySelector('.js-output-text-principal').innerHTML = outString;
}

function printYearsColumn(years) {
  outString = '';
  let i = 0;
  while(i<years+1) {
    outString = outString + `Year ${i}<br><br>`;
    i++;
  }
  document.querySelector('.js-output-text-years').innerHTML = outString;
}