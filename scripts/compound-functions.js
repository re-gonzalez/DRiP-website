function calculateCompoundInterest() {
  const initPrincipal = Number(initPrincipalElem.value);
  const monthlyContributionC = Number(monthlyContributionCElem.value) || 0;
  const apyPercent = Number(apyPercentElem.value);
  const totalYearsC = Number(totalYearsCElem.value);
  const compFreq = Number(compFrequElem.value);

  const dataValidation = [initPrincipal,monthlyContributionC,apyPercent,totalYearsC];

  flag = validateInputs(dataValidation);

  if(flag===true){
  } else {  
    let i = 1;
    let j = 1;
    let currentPrincipal  = [initPrincipal];
    let outPrincipal      = [initPrincipal];
    let yearsArray        = [0];
    let totalContribution = [initPrincipal];
    while(i<(totalYearsC*compFreq)+1) {
      currentPrincipal[i] = currentPrincipal[i-1]*(1+(apyPercent/(100*compFreq))) + monthlyContributionC*(12/compFreq);

      if(i%compFreq===0) {
        yearsArray[j] = j;
        outPrincipal[j] = currentPrincipal[i];
        totalContribution[j] = totalContribution[j-1] + (12*monthlyContributionC);
        j++;
      }
      i++;
    }
    
    outString = twoDecimalUSD.format(outPrincipal[outPrincipal.length - 1]);
    document.querySelector('.js-final-value-text').innerHTML = outString;

    outString = printColumn(yearsArray,``,`Years`);
    outPrincipal = formatColumn(outPrincipal,twoDecimalUSD);
    outString = printColumn(outPrincipal,outString, `Value`);
    totalContribution = formatColumn(totalContribution,twoDecimalUSD);
    printLastColumn(totalContribution,outString,`Total Contributions`);
  }
}