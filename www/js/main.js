window.video = null;

$(function() {
  FastClick.attach(document.body);
  video = $('#main');
  var videoElement = video[0];
  var progressBar = $('.progress-bar div');

  var width = window.innerWidth;
  var height = window.innerHeight;

  video.css({
    'width': '100%',
    'height': height + 'px'
  });

  video.on('click', function(e) {
    if (!videoElement.paused) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  });

  video.on('dblclick', function(e) {
    videoElement.currentTime = 0;
  });

  video.on('play', function(e) {
    $('body').addClass('playing');
  });

  video.on('pause', function(e) {
    $('body').removeClass('playing');
  });

  video.on('timeupdate', function(e) {
    var percentage = (videoElement.currentTime / videoElement.duration) * 100;
<<<<<<< HEAD
=======
    console.log(percentage);
>>>>>>> 9b1390441f614a331fa12eb5e4fc6ef79f06cd75
    progressBar.width(percentage + '%');
  });
});