// Arka plan videosunu mobil tarayıcılarda da başlatmayı dener
document.addEventListener("DOMContentLoaded", function () {
  var v = document.querySelector("video.bg");
  if (!v) return;
  v.muted = true;
  var p = v.play();
  if (p && p.catch) {
    p.catch(function () {
      document.addEventListener("touchstart", function once() {
        v.play();
        document.removeEventListener("touchstart", once);
      }, { once: true });
    });
  }
});
