function displayCompoundInterestCalc() {
  document.querySelector('.js-input-div').innerHTML = `
    <div class="input-set">
      Principal
      <input type="text" class="calc-text-in js-initial-principal-input" placeholder="$ 0.00">
    </div>

    <hr class="input-div-hr">

    <div class="input-set">
      Monthly Contribution
      <input type="text" class="calc-text-in js-compound-monthly-input" placeholder="$ 0.00">
    </div>

    <hr class="input-div-hr">

    <div class="input-set">
      Interest Rate (APY)
      <input type="text" class="calc-text-in js-apy-input" placeholder="0.00%">
    </div>

    <hr class="input-div-hr">

    <div class="input-set">
      Compound Frequency
      <select class="comp-freq-select js-compound-frequency-select">
        <option value="1">Yearly</option>
        <option value="2">Semiannually</option>
        <option value="4">Quarterly</option>
        <option value="12">Monthly</option>
      </select>
    </div>

    <hr class="input-div-hr">

    <div class="input-set">
      Years
      <input type="text" class="calc-text-in js-compound-years-input" placeholder="0">
    </div>

    <hr class="input-div-hr">

    <div class="input-set">
      <button class="calculate-button" onclick="
        calculateCompoundInterest();
      ">
        Calculate
      </button>
    </div>
  `;
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

    outString = printColumn(yearsArray,``,`Years`);
    outPrincipal = formatColumn(outPrincipal,twoDecimalUSD);
    outString = printColumn(outPrincipal,outString, `Value`);
    totalContribution = formatColumn(totalContribution,twoDecimalUSD);
    printLastColumn(totalContribution,outString,`Total Contributions`);

    let msgString = '';
    msgString = `After ${totalYearsC} years, you will have ${outPrincipal[outPrincipal.length - 1]}`;

    printMessage(msgString);
  }
}