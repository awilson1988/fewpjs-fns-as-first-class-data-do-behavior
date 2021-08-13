/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeInput) {
  let currentTime = parseInt(timeInput.split(':')[0])
  if (currentTime < 12) {
    return 'Good Morning';
  } else if (currentTime >= 12 && currentTime < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  };
};

function displayMessage(args) {
  document.getElementById('greeting').innerText = args;
};