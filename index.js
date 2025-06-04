const videoOverlay = document.getElementById('videoOverlay');
const videoElement = document.getElementById('fullscreenVideo');
const closeBtn = document.getElementById('closeBtn');

function playVideo(url) {
  videoElement.src = url;
  videoOverlay.style.display = 'flex';
  videoElement.play();

  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen().catch(function() {});
  }
}

function closeVideo() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  videoElement.pause();
  videoElement.src = '';
  videoOverlay.style.display = 'none';
}

closeBtn.onclick = closeVideo;
videoElement.onended = closeVideo;

document.onkeydown = function(e) {
  if (e.key === 'Escape' && videoOverlay.style.display === 'flex') {
    closeVideo();
  }
};
