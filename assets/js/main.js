// Function to load external HTML into a placeholder
function loadHTML(selector, path) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(selector).innerHTML = html;
    })
    .catch(err => console.error(err));
}

// Load the header
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header-placeholder", "assets/html/header.html");
});
