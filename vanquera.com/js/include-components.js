fetch("/components/navbar.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("nav-placeholder").innerHTML = html;
  });

fetch("/components/footer.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
  });