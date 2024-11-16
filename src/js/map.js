const button = document.getElementById('toggleButton');

// add class active button: "next location" to btn color to stay yellow
  button.addEventListener('mousedown', () => {
    button.classList.add('active'); 
  });