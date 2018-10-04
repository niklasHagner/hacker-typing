var KeyPressSoundController = function(options) {

  var fileNames = [
    "sounds/key0.mp3",
    "sounds/key1.mp3",
    "sounds/key2.mp3",
    "sounds/key3.mp3",
    "sounds/key4.mp3",
    "sounds/key5.mp3",
    "sounds/key6.mp3",
    "sounds/key7.mp3",
    "sounds/key8.mp3"
  ];

  var loadedAudioFiles = [];

  var loadSounds = function(fileNames) {
    fileNames.forEach(function(fileName) {
      try {
        var sound = new Audio(fileName);
        sound.load();
        loadedAudioFiles.push(sound);
      } catch (e) {
        console.error("Error loading sound " + fileName);
        return;
      }
    });

  };

  var playRandomSound = function() {
    if (areFilesLoaded()) {
      console.error("No audio files have been loaded");
      return;
    }
    var randomIndex = getRandomInt(0, fileNames.length - 1);
    var randomSound = loadedAudioFiles[randomIndex];
    playAudioObject(randomSound);
  };
  var playSoundByFileName = function(fileName) {
    var ix = fileNames.indexOf(fileName);
    playAudioObject(loadedAudioFiles[ix]);
  };

  var playAudioObject = function(audioObject) {
    audioObject.play();
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var areFilesLoaded = function() {
    return fileNames.length < 1 || loadedAudioFiles.length < 1;
  };

  var constructReturnObject = function(options) {
    var returnObject = {
      FileNames: fileNames,
      LoadSounds: loadSounds,
      PlayRandomSound: playRandomSound,
      PlaySoundByFileName: playSoundByFileName,
      AreFilesLoaded: areFilesLoaded
    };
    if (typeof options === "undefined" || typeof options !== "object") {
      applyDefaultOptions(returnObject);
      return returnObject;
    }
    if (options.doNotLoadSoundsAutomatically === false) {
      returnObject.LoadSounds(returnObject.FileNames);
    }

    return returnObject;
  };

  var applyDefaultOptions = function(returnObject) {
    returnObject.LoadSounds(returnObject.FileNames);
  };

  return constructReturnObject(options);
};
