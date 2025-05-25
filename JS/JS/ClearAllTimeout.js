// Store all timeout IDs
const timeoutIds = [];

// Custom setTimeout wrapper
function customSetTimeout(callback, delay) {
  const id = setTimeout(callback, delay);
  timeoutIds.push(id);
  return id;
}

// Custom clearAllTimeout function
function clearAllTimeout() {
  while (timeoutIds.length) {
    const id = timeoutIds.pop();
    clearTimeout(id);
  }
}

// Schedule some timeouts
customSetTimeout(() => console.log("Timeout 1"), 1000);
customSetTimeout(() => console.log("Timeout 2"), 2000);
customSetTimeout(() => console.log("Timeout 3"), 3000);

// Clear all timeouts before they fire
setTimeout(() => {
  console.log("Clearing all timeouts");
  clearAllTimeout();
}, 1500);
