// menu toggle
function openPortfolio(portfolioTitle) {
  var i;
  var x = document.getElementsByClassName("portfolio");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(portfolioTitle).style.display = "block";
}
