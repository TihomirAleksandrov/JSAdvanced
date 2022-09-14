function walk(steps, footprint, speed){
    let distanceInMeters = steps * footprint;
    let rest = Math.floor(distanceInMeters / 500);
    let metersPerSecond = speed / 3.6;
    let totalSeconds = distanceInMeters / metersPerSecond;

    let timeInMin = Math.floor(totalSeconds / 60);
    let timeInSec = Number((totalSeconds - (timeInMin * 60)).toFixed(0));
    let timeInHours = Math.floor(totalSeconds / 3600);
    timeInMin += rest;
    timeInHours += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let formatedHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let formatedMins = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formatedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${formatedHours}:${formatedMins}:${formatedSec}`);
}

walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5)