var blinkInterval;
var originalTitle = document.title;

function blinkTitle() {
  blinkInterval = setInterval(function() {
    document.title = (document.title == originalTitle) ? 'Come back soon!' : originalTitle;
  }, 1000);
}

function stopBlinking() {
  clearInterval(blinkInterval);
  document.title = originalTitle;
}

window.onblur = function() {
  blinkTitle();
}

window.onfocus = function() {
  stopBlinking();
}