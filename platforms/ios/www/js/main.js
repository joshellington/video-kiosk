var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');

    var video = videojs('main');
    video.requestFullscreen();
    video.on('play', function() {
      writeLog('Video played');
    });

    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
      // console.log('got main dir', dir);
      dir.getFile('log.txt', {create: true}, function(file) {
        // console.log('got the file', file);
        logOb = file;
        writeLog('App started');
      });
    });
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
  }
};

app.initialize();

// Functions

function writeLog(str) {
  if(!logOb) return;
  var log = str + ' [' + (new Date()) + ']\n';
  // console.log('going to log '+log);
  logOb.createWriter(function(fileWriter) {
    fileWriter.seek(fileWriter.length);
    var blob = new Blob([log], {type:'text/plain'});
    fileWriter.write(blob);
  }, fail);
}