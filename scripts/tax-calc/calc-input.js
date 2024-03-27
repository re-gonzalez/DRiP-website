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

  const tDataEntryDiv = document.createElement("div");
  const newForm = document.createElement("form");
  const shortRadio = document.createElement("input");
  const longRadio  = document.createElement("input");
  const shortLabel = document.createElement("label");
  const longLabel  = document.createElement("label");
  const shortText  = document.createTextNode("Short Term");
  const longText   = document.createTextNode("Long Term");
  const brkElem    = document.createElement("br");

  qParaElem.appendChild(qTextNode);
  pParaElem.appendChild(pTextNode);
  sParaElem.appendChild(sTextNode);

  shortLabel.appendChild(shortText);
  longLabel.appendChild(longText);
  newForm.appendChild(shortRadio);
  newForm.appendChild(shortLabel);
  newForm.appendChild(brkElem);
  newForm.appendChild(longRadio);
  newForm.appendChild(longLabel);
  
  qDataEntryDiv.appendChild(qParaElem);
  qDataEntryDiv.appendChild(qInputElem);
  pDataEntryDiv.appendChild(pParaElem);
  pDataEntryDiv.appendChild(pInputElem);
  sDataEntryDiv.appendChild(sParaElem);
  sDataEntryDiv.appendChild(sInputElem);
  tDataEntryDiv.appendChild(newForm);
  
  newEntryDiv.appendChild(qDataEntryDiv);
  newEntryDiv.appendChild(pDataEntryDiv);
  newEntryDiv.appendChild(sDataEntryDiv);
  newEntryDiv.appendChild(tDataEntryDiv);

  gainsEntryHTML.appendChild(newEntryDiv);

  newEntryDiv.classList.add("cap-gains-entry-div");
  qDataEntryDiv.classList.add("data-entry-div");
  pDataEntryDiv.classList.add("data-entry-div");
  sDataEntryDiv.classList.add("data-entry-div");
  tDataEntryDiv.classList.add("data-entry-div");
  qInputElem.classList.add("data-input");
  pInputElem.classList.add("data-input");
  sInputElem.classList.add("data-input");

  shortRadio.setAttribute("type", "radio");
  shortRadio.setAttribute("id", "short-term");
  shortRadio.setAttribute("name", "term-length");
  shortRadio.setAttribute("checked", "");
  shortLabel.setAttribute("for", "short-term");
  longRadio.setAttribute("type", "radio");
  longRadio.setAttribute("id", "long-term");
  longRadio.setAttribute("name", "term-length");
  longRadio.setAttribute("for", "long-term");
}