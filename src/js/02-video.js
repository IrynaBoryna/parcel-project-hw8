import throttle from 'lodash.throttle';
import Player  from '@vimeo/player';


const player = new Player('vimeo-player');

player.on('play', function() {
    // console.log('played the video!');
});

 
const STORAGE_KEY = 'videoplayer-current-time';
    
const onPlay = function(time) {
  
localStorage.setItem(STORAGE_KEY, time.seconds);
// console.log(JSON.stringify(time.seconds));
};

player.on('timeupdate', throttle((onPlay), 1000));

    
player.setCurrentTime((localStorage.getItem(STORAGE_KEY)))
.then(function() {
    //   console.log(localStorage.getItem(STORAGE_KEY));
})
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
             break;
        default:
             break;
    }
});
