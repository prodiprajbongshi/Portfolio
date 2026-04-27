
// Disable Right Click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable F12, Ctrl+Shift+I
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

// block dev tools
setInterval(() => {
  const before = new Date().getTime();
  const after = new Date().getTime();
  if (after - before > 100) {
    window.location.href = "about:blank";
  }
}, 1000);


// desabel page source 
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
   
  }
});

