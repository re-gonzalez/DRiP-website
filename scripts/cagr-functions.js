function displayCagrCalc() {
  document.querySelector('.js-input-div').innerHTML = `
    <p>Initial Value</p>
    <input type="text" class="calc-text-in js-initial-value-input">

    <p>Final Value</p>
    <input type="text" class="calc-text-in js-final-value-input">

    <p>Years</p>
    <input type="text" class="calc-text-in js-cagr-years-input">

    <button class="calculate-button" onclick="
    calculateCagr();
    ">
      Calculate
    </button>
  `;
}

function calculateCagr() {
  /* Collect inputs from CAGR calculator */
  const initValElem  = document.querySelector('.js-initial-value-input');
  const finalValElem = document.querySelector('.js-final-value-input');
  const yearsElem    = document.querySelector('.js-cagr-years-input');

  let flag = false;

  let initVal  = Number(initValElem.value);
  let finalVal = Number(finalValElem.value);
  let years    = Number(yearsElem.value);

  const dataValidation = [initVal, finalVal, years, 1];
  flag = validateInputs(dataValidation);

  if(flag===true) {
  } else {
    let CAGR = 0;
    CAGR = (((finalVal/initVal)**(1/years)) - 1)*100;
    CAGR = twoDecimal.format(CAGR);
    
    let msgString = '';
    msgString = `The Compound Annual Growth Rate is ${CAGR}%`;
    printMessage(msgString);
  }
}