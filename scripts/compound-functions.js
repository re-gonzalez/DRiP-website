function displayCompoundInterestCalc() {
  document.querySelector('.js-input-div').innerHTML = `
    <p>Principal</p>
    <input type="text" class="js-initial-principal-input">

    <p>Monthly Contribution</p>
    <input type="text" class="js-compound-monthly-input">

    <p>APY (%)</p>
    <input type="text" class="js-apy-input">

    <p>Compound Frequency</p>
    <select class="js-compound-frequency-select">
      <option value="1">Yearly</option>
      <option value="2">Semiannually</option>
      <option value="4">Quarterly</option>
      <option value="12">Monthly</option>
    </select>

    <p>Years</p>
    <input type="text" class="js-compound-years-input">

    <button class="calculate-button" onclick="
    calculateCompoundInterest();
    ">
      Calculate
    </button>

    <p class="js-final-value-text"></p>
  `
}

function calculateCompoundInterest() {
  /* Collect input elements from compound interest calculator */
  const initPrincipalElem        = document.querySelector('.js-initial-principal-input');
  const monthlyContributionCElem = document.querySelector('.js-compound-monthly-input');
  const apyPercentElem           = document.querySelector('.js-apy-input');
  const totalYearsCElem          = document.querySelector('.js-compound-years-input');
  const compFrequElem            = document.querySelector('.js-compound-frequency-select');

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