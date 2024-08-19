// Initialize the typing animation element
const typingAnimationElement = document.getElementById('typing-animation');

// Define an array of typing texts
const typingTexts = [
  'Developer  ',
  'Designer   ',
];

// Define a function to display the typing animation for a given text
function playTypingAnimation(text, index) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 100); // Increase the delay to slow down the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    const nextIndex = (index + 1) % typingTexts.length;
    playTypingAnimation(typingTexts[nextIndex], nextIndex);
  }, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0], 0);

AOS.init();

// // Google Sheets Form Submission
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzEROuhi5h5HUq9p-Uq1ryDp9uDgYXapol3UkxubiKIXxFbLO2gXogVHfgJfZKt1lXr9w/exec';
// const form = document.forms['google-sheet'];

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => alert("Thanks for contacting us! We will get back to you soon."))
//         .catch(error => console.error('Error!', error.message));
// });
