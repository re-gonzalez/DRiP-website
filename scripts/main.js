const twoDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const threeDecimalUSD = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 3,
  minimumFractionDigits: 3,
});

const twoDecimal = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

/* Calculator Type Select Input */
const calcTypeSelectElem = document.querySelector('.js-calculator-type-select');

/* Initialize variable output arrays */
let results = [];

/* Open/Close Table Flag */
let tableOpen = false;

function displayCalcSelection(selectorElem) {
  let selectorNumber = selectorElem.value;
  switch(selectorNumber) {
    case "1":
      displayCompoundInterestCalc();
      break;
    case "2":
      displayDollarDripCalc();
      break;
    case "3":
      displayShareDripCalc();
      break;
    case "4":
      displayCagrCalc();
      break;
    default:
      document.querySelector('.js-input-div').innerHTML = `
        <p>ERROR</p>
      `;
  }
}

function formatColumn(array,formatType) {
  const arrayLength = array.length;
  let arrayOut = [];
  let i = 0;
  while(i<arrayLength) {
    arrayOut[i] = formatType.format(array[i]);
    i++;
  }
  return arrayOut;
}

function printColumn(array, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    outString = outString + `${array[i]}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  return outString;
}

function printLastColumn(array, beforeString, headerString) {
  const arrayLength = array.length;
  outString = beforeString + `
  <div class="output-column-div">
    <p class="column-text">` + headerString + `<br><br>
  `;
  let i = 0;
  while(i<arrayLength) {
    outString = outString + `${array[i]}<br><br>`;
    i++;
  }
  outString = outString + `</p></div>`;
  document.querySelector('.js-output-table-div').innerHTML = outString;
}

function checkNumber(value) {
  let flag = false;
  if(isNaN(value)) {
    printMessage('ERROR: Enter Number Values Only');
    flag = true;
  }
  return flag;
}

function checkInteger(value) {
  let flag = false;
  if(value%1 != 0) {
    printMessage('ERROR: Enter Integer Value for Years');
    flag = true;
  }
  return flag;
}

function validateInputs(array) {
  let flag = false;
  for(let i = 0; i < array.length; i++) {
    flag = checkNumber(array[i]);
    if(flag==true) {
      break;
    }
    if(i===array.length-1) {
      flag = checkInteger(array[i]);
    }
  }
  return flag;
}

function printMessage(string) {
  document.querySelector('.js-message-text').innerHTML = string;
}

function addInputDivBorder() {
  const targetElem = document.querySelector(".js-input-div");
  targetElem.classList.add("add-border-input-div");
}

function showCalcResultTable(resultArrays) {
  let numArrays = resultArrays.length;
  let tableHtmlString = `<table><tr>`;
  let k = 0;
  while (k<resultArrays.length) {
    tableHtmlString = tableHtmlString + `
          <th>${resultArrays[k][0]}</th>
    `;
    k++;
  }

  tableHtmlString = tableHtmlString + `</tr>`
  
  let i = 1;

  while(i<resultArrays[0].length) {
    tableHtmlString = tableHtmlString + `<tr>`;
    let j = 0;
    while(j<resultArrays.length) {
      if (j === resultArrays.length - 1) {
        tableHtmlString = tableHtmlString + `
          <td>${resultArrays[j][i]}</td>
        </tr>`;
        j++;
      } else {
        tableHtmlString = tableHtmlString + `
          <td>${resultArrays[j][i]}</td>
        `;
        j++;
      }
    }
    i++;
  }

  document.querySelector(".js-output-table-div").innerHTML = tableHtmlString + `</table>`;
  console.log(resultArrays[0][15]);
  console.log(typeof resultArrays[0][15]);

}

function handleTableOpenClose(tableOpen) {
  if (tableOpen === false) {
    showCalcResultTable(results);
    document.querySelector(".js-show-table-button").innerText = 'Hide Table';
    tableOpen = true;
  } else {
    document.querySelector(".js-show-table-button").innerText = 'Show Table';
    document.querySelector(".js-output-table-div").innerHTML = "";
    tableOpen = false;
  }
  return tableOpen;
}