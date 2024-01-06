function embedVideo() {
  var videoLink = document.getElementById('videoLink').value;
    
  if (videoLink.indexOf('youtube.com') > -1) {
    var videoId = getYouTubeVideoId(videoLink);
    if (videoId) {
      var embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
      document.getElementById('videoContainer').innerHTML = embedCode;
    } else {
      alert('Không thể xác định mã video từ đường link.');
    }
  } else {
    alert('Vui lòng nhập đường link YouTube.');
  }
}

function getYouTubeVideoId(url) {
  var videoId = '';
  var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[1].length === 11) {
    videoId = match[1];
  }
  return videoId;
}
