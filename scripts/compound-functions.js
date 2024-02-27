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

  yearsColString = printYearsColumn(totalYears);

  printLastColumn(currentPrincipal,compFreq,yearsColString, `Value`);
}