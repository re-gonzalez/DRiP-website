let numGainEntry = 1;

function addCapGainsEntry(numGainEntry) {
  let gainsEntryHTML = document.getElementById("cap-gains-entry-list-div");

  const newEntryDiv = document.createElement("div");

  const qDataEntryDiv = document.createElement("div");
  const pDataEntryDiv = document.createElement("div");
  const sDataEntryDiv = document.createElement("div");

  const qParaElem = document.createElement("p");
  const pParaElem = document.createElement("p");
  const sParaElem = document.createElement("p");

  const qTextNode = document.createTextNode("Quantity");
  const pTextNode = document.createTextNode("Purchase Price");
  const sTextNode = document.createTextNode("Sale Price");
  const qInputElem = document.createElement("input");
  const pInputElem = document.createElement("input");
  const sInputElem = document.createElement("input");

  qParaElem.appendChild(qTextNode);
  pParaElem.appendChild(pTextNode);
  sParaElem.appendChild(sTextNode);
  
  qDataEntryDiv.appendChild(qParaElem);
  qDataEntryDiv.appendChild(qInputElem);
  pDataEntryDiv.appendChild(pParaElem);
  pDataEntryDiv.appendChild(pInputElem);
  sDataEntryDiv.appendChild(sParaElem);
  sDataEntryDiv.appendChild(sInputElem);
  
  newEntryDiv.appendChild(qDataEntryDiv);
  newEntryDiv.appendChild(pDataEntryDiv);
  newEntryDiv.appendChild(sDataEntryDiv);

  gainsEntryHTML.appendChild(newEntryDiv);

  newEntryDiv.classList.add("cap-gains-entry-div");
  qDataEntryDiv.classList.add("data-entry-div");
  pDataEntryDiv.classList.add("data-entry-div");
  sDataEntryDiv.classList.add("data-entry-div");
  qInputElem.classList.add("data-input");
  pInputElem.classList.add("data-input");
  sInputElem.classList.add("data-input");
  
/*
  const newEntryElem = document.createTextNode(`
  <div class="cap-gains-entry-div" id="cap-gains-entry${numGainEntry+1}">
    <div class="data-entry-div">
      <p>Quantity</p>
      <input class="data-input">
    </div>
    <div class="data-entry-div">
      <p>Purchase Price</p>
      <input class="data-input">
    </div>
    <div class="data-entry-div">
      <p>Sale Price</p>
      <input class="data-input">
    </div>
  </div>
  `);*/
}