const input = document.getElementById("myText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchInput = input.value;

  localStorage.setItem("Input", searchInput);

  window.location.href="index2.html";
});
