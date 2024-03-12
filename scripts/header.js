document.querySelector('.js-header-div').innerHTML = `
  <div class="header-logo-div">
    <img class="header-logo-img" src="images/ez-money-logo.png">
  </div>
  
  <div class="header-buttons-div">
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
      document.location='portfolios.html';
    ">
      Portfolios
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
  </div>
`;