document.addEventListener("DOMContentLoaded", function() {
  const textInput = document.querySelectorAll(".text-input")[0];
  const wordCount = document.querySelectorAll(".word-count")[0];
  const letterCount = document.querySelectorAll(".letter-count")[0];
  const spaceCount = document.querySelectorAll(".space-count")[0];

  // Load saved data from local storage
  const savedText = localStorage.getItem("textData");
  const savedWordCount = localStorage.getItem("wordCount");
  const savedLetterCount = localStorage.getItem("letterCount");
  const savedSpaceCount = localStorage.getItem("spaceCount");
  if (savedText) {
    textInput.value = savedText;
    wordCount.textContent = savedWordCount || 0;
    letterCount.textContent = savedLetterCount || 0;
    spaceCount.textContent = savedSpaceCount || 0;
  }

  // Listen for input changes and update counts
  textInput.addEventListener("input", function() {
    localStorage.setItem("textData", textInput.value); // save text to local storage
    updateCounts(); // Update word, letter and space counts
  });

  function updateCounts() {
    let text = textInput.value.trim();
    let words = text === "" ? 0 : text.split(/\s+/).length;
    let letters = text.replace(/\s/g, "").length;
    let spaces = (text.match(/\s/g) || []).length;
    // update UI
    wordCount.textContent = words;
    letterCount.textContent = letters;
    spaceCount.textContent = spaces;
    // save counts to local storage
    localStorage.setItem("wordCount", words);
    localStorage.setItem("letterCount", letters);
    localStorage.setItem("spaceCount", spaces);
  }
});