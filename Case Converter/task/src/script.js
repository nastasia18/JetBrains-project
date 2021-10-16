let btn1 = document.querySelector('#upper-case');
let btn2 = document.querySelector('#lower-case');
let btn3 = document.querySelector('#proper-case');
let btn4 = document.querySelector('#sentence-case');

let textArea = document.querySelector('textarea');
let textValue = '';

btn1.addEventListener('click', function () {
   textValue = textArea.value.toUpperCase();
   textArea.value = textValue;
});

btn2.addEventListener('click', function () {
   textValue = textArea.value.toLowerCase();
   textArea.value = textValue;
});

btn3.addEventListener('click', function () {
   textValue = textArea.value.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
   textArea.value = textValue;
});

btn4.addEventListener('click', function () {
   textValue = textArea.value.split(". ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(". ");
   textArea.value = textValue;
});