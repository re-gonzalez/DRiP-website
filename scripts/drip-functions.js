function calculateDrip() {
  const initInvestment = Number(initInvestmentElem.value);
  const initStockPrice = Number(initStockPriceElem.value);
  const initDividend   = Number(initDividendElem.value);
  const divFreq        = Number(divFreqElem.value);
  const stockGrowth    = Number(stockGrowthElem.value);
  const divGrowth      = Number(divGrowthElem.value);
  const totalYearsD    = Number(totalYearsDElem.value);
  const monthlyContributionD = Number(monthlyContributionDElem.value) || 0;

  let investVal      = [initInvestment];
  let stockPrice     = [initStockPrice];
  let dividend       = [initDividend];
  let shares         = [initInvestment/initStockPrice];
  let dividendIncome = [shares*divFreq*initDividend];

  console.log(stockGrowth);
  console.log(typeof stockGrowth);

  let i = 0;
  while(i<totalYearsD) {
    //1. Calculate new stock price
    stockPrice[i+1] = stockPrice[i]*(1 + (stockGrowth/100));
    //2. Calculate new amount of shares
    shares[i+1] = shares[i] + (dividendIncome[i]/stockPrice[i+1]) + ((monthlyContributionD*12)/stockPrice[i+1]);
    //3. Calculate new dividend
    dividend[i+1] = dividend[i]*(1 + (divGrowth/100));
    //4. Calculate new dividend income
    dividendIncome[i+1] = shares[i+1]*divFreq*dividend[i+1];
    //5. Calculate new investment value
    investVal[i+1] = shares[i+1]*stockPrice[i+1];
    i++;
  }

  outString = printYearsColumn(totalYearsD);
  
  outString1 = printNextColumn(investVal,outString,`Value`);

  printLastColumn(dividendIncome,1,outString1,`Dividend Income`);
}

