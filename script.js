// Simple Dark/Light mode toggle
const toggleBtn = document.getElementById('theme-toggle');
let dark = false;

toggleBtn.addEventListener('click', () => {
  dark = !dark;
  if (dark) {
    document.body.style.setProperty('--bg-color', '#1e1e1e');
    document.body.style.setProperty('--text-color', '#f1f1f1');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    document.body.style.setProperty('--bg-color', '#ffffff');
    document.body.style.setProperty('--text-color', '#333333');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

document.getElementById('switch').onclick = function() {
    var contentDiv = document.getElementsByClassName('column-hidden');
    
    // Toggle the 'hidden' class to show/hide the div
    contentDiv.classList.toggle('hidden'); 

    // You can also directly change style properties
    // if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
    //     contentDiv.style.display = 'block';
    // } else {
    //     contentDiv.style.display = 'none';
    // }

    // Or change content
    // contentDiv.innerHTML = "New content after click!";

    // Or call another function
    // alert("Button was clicked!");
};
