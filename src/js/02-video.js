import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onUpdate, 1000));

function onUpdate (data) {{
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data)); 
};

const current = localStorage.getItem("videoplayer-current-time");
const parsedCurrent = JSON.parse(current);

player.setCurrentTime(parsedCurrent.seconds).then(function(seconds) {   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

