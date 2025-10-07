
function loadHTML(selector, path) {
  fetch(path)
    .then(response => response.text())
    .then(html => {
      document.getElementById(selector).innerHTML = html;
    });
}
