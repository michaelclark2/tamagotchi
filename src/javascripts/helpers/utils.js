const printToDom = (divId, domString) => {
  document.getElementById(divId).innerHTML = domString;
};

export default {
  printToDom,
};
