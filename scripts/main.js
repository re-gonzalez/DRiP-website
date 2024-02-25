const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const initPrincipalElem = document.querySelector('.js-initial-principal-input');
const apyPercentElem = document.querySelector('.js-apy-input');
const totalYearsElem = document.querySelector('.js-years-input');
const compFrequElem = document.querySelector('.js-frequency-select');

function calculateFinalValue() {
  const initPrincipal = initPrincipalElem.value;
  const apyPercent = apyPercentElem.value;
  const totalYears = totalYearsElem.value;
  const compFreq = Number(compFrequElem.value);
  
  let i = 0;
  let currentPrincipal = initPrincipal;
  while(i<(totalYears*compFreq)) {
    currentPrincipal = currentPrincipal*(1+(apyPercent/(100*compFreq)));
    i++;
  }
  
  outString = twoDecimalUSD.format(currentPrincipal);

  document.querySelector('.js-final-value-text').innerHTML = outString;
}