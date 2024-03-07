function displayShareDripCalc() {
  document.querySelector('.js-input-div').innerHTML = `
  <p>Initial Number of Shares</p>
  <input type="text" class="js-initial-shares-input">

  <p>Initial Stock Price</p>
  <input type="text" class="js-initial-stock-price-input">

  <p>Initial Dividend</p>
  <input type="text" class="js-initial-dividend-input">

  <p>Dividend Frequency</p>
  <select class="js-dividend-frequency-select">
    <option value="1">Yearly</option>
    <option value="2">Semiannually</option>
    <option value="4">Quarterly</option>
    <option value="12">Monthly</option>
  </select>

  <p>Monthly Contribution</p>
  <input type="text" class="js-drip-monthly-input">

  <p>Stock Price Growth (%)</p>
  <input type="text" class="js-stock-growth-input">

  <p>Dividend Growth Rate (%)</p>
  <input type="text" class="js-dividend-growth-input">

  <p>Years</p>
  <input type="text" class="js-drip-years-input">

  <button class="calculate-button" onclick="
  calculateSharesDrip();
  ">
    Calculate
  </button>

  <p></p>
  `;
}

function calculateSharesDrip() {
  /* Collect input elements from Share DRiP calculator */
  const initSharesElem     = document.querySelector('.js-initial-shares-input');
  const initStockPriceElem = document.querySelector('.js-initial-stock-price-input');
  const initDividendElem   = document.querySelector('.js-initial-dividend-input');
  const divFreqElem        = document.querySelector('.js-dividend-frequency-select');
  const stockGrowthElem    = document.querySelector('.js-stock-growth-input');
  const divGrowthElem      = document.querySelector('.js-dividend-growth-input');
  const totalYearsDElem    = document.querySelector('.js-drip-years-input');
  const monthlyContributionDElem = document.querySelector('.js-drip-monthly-input');

  let flag = false;

  const initShares     = Number(initSharesElem.value);
  const initStockPrice = Number(initStockPriceElem.value);
  const initDividend   = Number(initDividendElem.value);
  const divFreq        = Number(divFreqElem.value);
  const stockGrowth    = Number(stockGrowthElem.value);
  const divGrowth      = Number(divGrowthElem.value);
  const totalYearsD    = Number(totalYearsDElem.value);
  const monthlyContributionD = Number(monthlyContributionDElem.value) || 0;

  const dataValidation = [initShares, initStockPrice, initDividend,divFreq,stockGrowth,divGrowth,monthlyContributionD,totalYearsD];

  flag = validateInputs(dataValidation);

  if(flag===true){
  } else {
    let shares         = [initShares];
    let stockPrice     = [initStockPrice];
    let dividend       = [initDividend];
    let investVal      = [initShares*initStockPrice];
    let dividendIncome = [shares*divFreq*initDividend];
    let yearsArray     = [0];
    let totalContribution = [initShares*initStockPrice];
    let eachYearCont = [investVal[0]];

    let newDivShares = 0;
    let newBotShares = 0;
    let rollOver     = 0;

    let i = 1;
    while(i<totalYearsD+1) {
      //1. Calculate new stock price
      stockPrice[i] = stockPrice[i-1]*(1 + (stockGrowth/100));
      //2. Calculate new amount of shares
      newDivShares = dividendIncome[i-1]/stockPrice[i];
      newBotShares = Math.floor(((monthlyContributionD*12) + rollOver)/stockPrice[i]);
      rollOver = ((monthlyContributionD*12) + rollOver) % stockPrice[i];
      eachYearCont[i] = newBotShares*stockPrice[i];
      shares[i] = shares[i-1] + newDivShares + newBotShares;
      //3. Calculate new dividend
      dividend[i] = dividend[i-1]*(1 + (divGrowth/100));
      //4. Calculate new dividend income
      dividendIncome[i] = shares[i]*divFreq*dividend[i];
      //5. Calculate new investment value
      investVal[i] = shares[i]*stockPrice[i];
      yearsArray[i] = i;
      totalContribution[i] = totalContribution[i-1] + (eachYearCont[i]);
      i++;
    }
    
    outString = printColumn(yearsArray,``,`Year`);

    investVal = formatColumn(investVal,twoDecimalUSD);
    outString = printColumn(investVal,outString,`Value`);

    dividendIncome = formatColumn(dividendIncome,twoDecimalUSD);
    outString      = printColumn(dividendIncome,outString,`Income`);

    shares = formatColumn(shares,twoDecimal);
    outString = printColumn(shares,outString,`Shares`);

    //eachYearCont = formatColumn(eachYearCont,twoDecimalUSD);
    //outString = printColumn(eachYearCont,outString,`Year Contribution`);

    totalContribution = formatColumn(totalContribution,twoDecimalUSD);
    outString         = printLastColumn(totalContribution,outString,`Total Contributions`);

    let msgString = '';
    msgString = `After ${totalYearsD} years, you will have ${investVal[investVal.length-1]}`;
    printMessage(msgString);
  }
}