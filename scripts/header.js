document.querySelector('.js-header-div').innerHTML = `
  <div class="header-logo-div">
  </div>
  
  <button class="header-button" onclick="
    document.location='index.html';
  ">
    Home Page
  </button>  

  <button class="header-button" onclick="
    document.location='articles.html';
  ">
    Articles
  </button>

  <button class="header-button" onclick="
    document.location='investment-calc.html';
  ">
    Investment Calculators
  </button>

  <button class="header-button" onclick="
    document.location='tax-calc.html';
  ">
    Tax Calculator
  </button>

  <button class="header-button" onclick="
    document.location='my-portfolio.html';
  ">
    My Portfolio
  </button>

  <button class="header-button" onclick="
    document.location='disclaimer.html';
  ">
    Disclaimer
  </button>

  <button class="header-button" onclick="
    document.location='donate.html';
  ">
    Donate
  </button>
`;