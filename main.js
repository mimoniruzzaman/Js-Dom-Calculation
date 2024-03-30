let num1 = document.getElementById("num-one");
let num2 = document.getElementById("num-two");

let result = document.getElementById("result");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let divi = document.getElementById("divi");

// Addition
add.addEventListener("click", () => {
  result.innerHTML = `Result : ${parseInt(num1.value) + parseInt(num2.value)}`;
});

// Subtract
sub.addEventListener("click", () => {
  result.innerText = `Result : ${parseInt(num1.value) - parseInt(num2.value)}`;
});

// Multiplay
mul.addEventListener("click", () => {
  result.innerHTML = `Result : ${parseInt(num1.value) * parseInt(num2.value)}`;
});

// Division
divi.addEventListener("click", () => {
  result.innerHTML = `Result : ${parseInt(num1.value) / parseInt(num2.value)}`;
});
