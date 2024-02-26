function calculateCompoundInterest() {
  const initPrincipal = Number(initPrincipalElem.value);
  const monthlyContribution = Number(monthlyContributionCElem.value) || 0;
  const apyPercent = Number(apyPercentElem.value);
  const totalYears = Number(totalYearsCElem.value);
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
  document.querySelector('.js-output-principal-text').innerHTML = outString;
}

function printYearsColumn(years) {
  outString = '';
  let i = 0;
  while(i<years+1) {
    outString = outString + `Year ${i}<br><br>`;
    i++;
  }
  document.querySelector('.js-output-years-text').innerHTML = outString;
}