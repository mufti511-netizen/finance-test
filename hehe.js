  // ─── Disable Right Click ───────────────────────────────
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Fitur klik kanan dimatikan.");
  });

  // ─── Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U ───
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
    }

    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }

    // Ctrl + Shift + C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
    }

    // Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
    }

    // Ctrl + U
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

  // ─── Deteksi DevTools Dibuka ───────────────────────────
  setInterval(function () {
    const devtools = /./;
    devtools.toString = function () {
      throw "DevTools Terdeteksi!";
    };

    try {
      console.log('%c', devtools);
    } catch (e) {
      alert("Developer Tools terdeteksi! Silakan tutup DevTools.");
      window.location.reload();
    }
  }, 1000);
