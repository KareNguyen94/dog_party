function changeDogName(name) {
  var dogHeader = document.getElementById("somedogs");
  dogHeader.innerText = name;
}

document.getElementById("nameButton").addEventListener("click", function() {
  var textBox = document.getElementById("formBox");
  changeDogName(textBox.value);
  textBox.value = "";
});

function toggleParagraph(paragraphId) {
  var paragraph = document.getElementById(paragraphId);
  if (paragraph.style.visibility === "visible") {
    paragraph.style.visibility = "hidden";
  } else {
    paragraph.style.visibility = "visible";
  }
}

document.getElementById("howButton").addEventListener("click", function() {
  toggleParagraph("howToDog");
});

document.getElementById("whatButton").addEventListener("click", function() {
  toggleParagraph("whatIsDog");
});

document.getElementById("factsButton").addEventListener("click", function() {
  toggleParagraph("factsFromDogs");
});

function changeParagraphText(text, paragraphId) {
  var paragraph = document.getElementById(paragraphId);
  paragraph.innerText = text;
}

document.getElementById("radioHow").addEventListener("click", function() {
  var paragraphBox = document.getElementById("paragraphBox");
  changeParagraphText(paragraphBox.value, "howToDog");
});

document.getElementById("radioWhat").addEventListener("click", function() {
  var paragraphBox = document.getElementById("paragraphBox");
  changeParagraphText(paragraphBox.value, "whatIsDog");
});

document.getElementById("radioFacts").addEventListener("click", function() {
  var paragraphBox = document.getElementById("paragraphBox");
  changeParagraphText(paragraphBox.value, "factsFromDogs");
});
