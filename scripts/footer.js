document.querySelector('.js-footer-div').innerHTML = `
<div class="left-footer-div">
  <div class="footer-logo-div">
    <img class="footer-logo-img" src="images/mf-blog-logo.png">
  </div>
  <div class="footer-links-container">
    <div class="footer-links-col">
      <div class="footer-link-p"><p onclick="document.location='index.html';">Home Page</p></div>
      <div class="footer-link-p"><p onclick="document.location='disclaimer.html';">Disclaimer</p></div>
      <div class="footer-link-p"><p>Reference</p></div>
    </div>

    <div class="footer-links-col">
      <div class="footer-link-p"><p onclick="document.location='donate.html';">Donate</p></div>
      <div class="footer-link-p"><p>Contact Us</p></div>
      <div class="footer-link-p"><p>Newsletter</p></div>
    </div>
  </div>
</div>
<div class="right-footer-div">
</div>
`;