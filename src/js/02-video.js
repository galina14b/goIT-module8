
import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playOn, 1000));

function playOn(e) {
  localStorage.setItem("videoplayer-current-time", e.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")|| 0);