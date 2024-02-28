function calculateDrip() {
  let flag = false;

  const initInvestment = Number(initInvestmentElem.value);
  const initStockPrice = Number(initStockPriceElem.value);
  const initDividend   = Number(initDividendElem.value);
  const divFreq        = Number(divFreqElem.value);
  const stockGrowth    = Number(stockGrowthElem.value);
  const divGrowth      = Number(divGrowthElem.value);
  const totalYearsD    = Number(totalYearsDElem.value);
  const monthlyContributionD = Number(monthlyContributionDElem.value) || 0;

  const dataValidation = [initInvestment, initStockPrice, initDividend,divFreq,stockGrowth,divGrowth,monthlyContributionD,totalYearsD];

  flag = validateInputs(dataValidation);

  if(flag===true){
  } else {
    let investVal      = [initInvestment];
    let stockPrice     = [initStockPrice];
    let dividend       = [initDividend];
    let shares         = [initInvestment/initStockPrice];
    let dividendIncome = [shares*divFreq*initDividend];
    let yearsArray     = [0];
    let totalContribution = [initInvestment];

    let i = 1;
    while(i<totalYearsD+1) {
      //1. Calculate new stock price
      stockPrice[i] = stockPrice[i-1]*(1 + (stockGrowth/100));
      //2. Calculate new amount of shares
      shares[i] = shares[i-1] + (dividendIncome[i-1]/stockPrice[i]) + ((monthlyContributionD*12)/stockPrice[i]);
      //3. Calculate new dividend
      dividend[i] = dividend[i-1]*(1 + (divGrowth/100));
      //4. Calculate new dividend income
      dividendIncome[i] = shares[i]*divFreq*dividend[i];
      //5. Calculate new investment value
      investVal[i] = shares[i]*stockPrice[i];
      yearsArray[i] = i;
      totalContribution[i] = totalContribution[i-1] + (12*monthlyContributionD);
      i++;
    }
    
    outString = printColumn(yearsArray,``,`Year`);

    investVal = formatColumn(investVal,twoDecimalUSD);
    outString = printColumn(investVal,outString,`Value`);

    dividendIncome = formatColumn(dividendIncome,twoDecimalUSD);
    outString      = printColumn(dividendIncome,outString,`Income`);

    shares = formatColumn(shares,twoDecimal);
    outString = printColumn(shares,outString,`Shares`);

    totalContribution = formatColumn(totalContribution,twoDecimalUSD);
    outString         = printLastColumn(totalContribution,outString,`Total Contributions`);
  }
}

