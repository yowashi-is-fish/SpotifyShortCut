var isInputFocused = false;

function checkFocus() {
  var focusedElement = document.activeElement;
  var tagName = focusedElement.tagName;
  isInputFocused = (tagName === 'INPUT' || tagName === 'TEXTAREA');
}

function handleKeyDown(event) {
  checkFocus(); // フォーカス状態を確認

  if (!isInputFocused) {
    switch (event.keyCode) {
      case 37: // Arrow Left
      case 72: // J Key
        Back();
        break;

      case 39: // Arrow Right
      case 76: // L Key
        Next();
        break;

//      case 38: // Arrow Up
//        VolumeAdd();
//        break;

//      case 40: // Arrow Down
//        VolumeSub();
//        break;

      case 32: // Space key
      case 75: // K key
        togglePlayPause();
        break;

      case 77: // M key
        Mute();
        break;

      case 82: // R key
        Repeat();
        break;

      case 83: // S key
        Shuffle();
        break;

      case 84: // T key
        Lyrics();
        break;

      case 86: // V key
        View();
        break;

      case 65: // A key
        Like();
        break;

      case 78: // N key
        NextList();
        break;

      case 68: // D key
        Device();
        break;
    }

    return false;
  }
}

document.addEventListener('keydown', handleKeyDown);

function togglePlayPause() {
  const playPauseButton = document.querySelector('[data-testid="control-button-playpause"]');
  playPauseButton.click();
}

function Back() {
  const backButton = document.querySelector('[data-testid="control-button-skip-back"]');
  backButton.click();
}

function Next() {
  const nextButton = document.querySelector('[data-testid="control-button-skip-forward"]');
  nextButton.click();
}

// function VolumeAdd() {
//   const volume = document.querySelector('label.hidden-visually > input[type="range"]');
//   volume.value = Number(volume.value) + 1;
//   console.log(`Volume: ${volume}\nFunction that sent request: VolumeAdd();\n ※ Turned up the volume (May be...)`);
// }

// function VolumeSub() {
//  const volume = document.querySelector('label.hidden-visually > input[type="range"]');
//  volume.value = Number(volume.value) - 1;
//  console.log(`Volume: ${volume}\nFunction that sent request: VolumeSub();\n ※ Turned down the volume (May be...)`);
// }

function Mute() {
  const muteButton = document.querySelector('[data-testid="volume-bar-toggle-mute-button"]');
  muteButton.click();
}

function Repeat() {
  const repeatButton = document.querySelector('[data-testid="control-button-repeat"]');
  repeatButton.click();
}

function Shuffle() {
  const shuffleButton = document.querySelector('[data-testid="control-button-shuffle"]');
  shuffleButton.click();
}

function Lyrics() {
  const lyricsButton = document.querySelector('[data-testid="lyrics-button"]');
  lyricsButton.click();
}

function Like() {
  const likeButton = document.querySelector('[data-testid="add-button"]');
  likeButton.click();
}

function View() {
  const viewButton = document.querySelector('[data-testid="control-button-npv"]');
  viewButton.click();
}

function NextList() {
  const nextListButton = document.querySelector('[data-testid="control-button-queue"]');
  nextListButton.click();
}

function Device() {
  const deviceButton = document.querySelector('[id="device-picker-icon-button"]');
  deviceButton.click();
}
