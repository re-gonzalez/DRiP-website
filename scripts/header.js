document.querySelector('.js-header-div').innerHTML = `
  <button class="header-button" onclick="
    document.location='articles.html'
  ">
    Articles
  </button>

  <button class="header-button" onclick="
    document.location='index.html'
  ">
    Calculator Page
  </button>

  <button class="header-button" onclick="
    document.location='stock-picks.html'
  ">
    Monthly Stock Picks
  </button>

  <button class="header-button" onclick="
    document.location='my-portfolio.html'
  ">
    My Portfolio
  </button>
`;