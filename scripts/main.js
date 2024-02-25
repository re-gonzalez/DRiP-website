const initPrincipalElem = document.querySelector('.js-initial-principal-input');
const apyPercentElem = document.querySelector('.js-apy-input');
const totalYearsElem = document.querySelector('.js-years-input');

function output(event) {
  if(event==='Enter') {
    let initPrincipal = initPrincipalElem.value;
  console.log(initPrincipal);
  }
}

function calculateFinalValue() {
  const initPrincipal = initPrincipalElem.value;
  const apyPercent = apyPercentElem.value;
  const totalYears = totalYearsElem.value;
  
  let i = 0;
  let finalVal = initPrincipal;
  while(i<totalYears) {
    finalVal = finalVal*(1+(apyPercent/100));
    i++;
  }
  finalVal=Math.round(finalVal*100)/100;

  outString = `$ ${finalVal}`;
  
  document.querySelector('.js-final-value-text').innerHTML = outString;
}