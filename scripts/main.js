const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

/* Collect input elements from compound interest calculator */
const initPrincipalElem        = document.querySelector('.js-initial-principal-input');
const monthlyContributionCElem = document.querySelector('.js-compound-monthly-input');
const apyPercentElem           = document.querySelector('.js-apy-input');
const totalYearsCElem          = document.querySelector('.js-compound-years-input');
const compFrequElem            = document.querySelector('.js-compound-frequency-select');

/* Collect input elements from DRiP calculator */
const initInvestmentElem = document.querySelector('.js-initial-investment-input');
const initStockPriceElem = document.querySelector('.js-initial-stock-price-input');
const initDividendElem   = document.querySelector('.js-initial-dividend-input');
const divFreqElem        = document.querySelector('.js-dividend-frequency-select');
const stockGrowthElem    = document.querySelector('.js-stock-growth-input');
const divGrowthElem      = document.querySelector('.js-dividend-growth-input');
const totalYearsDElem    = document.querySelector('.js-drip-years-input');
const monthlyContributionDElem = document.querySelector('.js-drip-monthly-input');