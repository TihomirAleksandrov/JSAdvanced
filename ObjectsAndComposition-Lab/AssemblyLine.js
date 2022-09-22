function solve(){
    return{
        hasClima: function(car){
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if(this.temp < this.tempSettings){
                    this.temp++;
                } else if(this.temp > this.tempSettings){
                    this.temp--;
                }
            }
        },
        hasAudio: function (car){
            car.currentTrack = {},
            car.nowPlaying = () => {
                if(!this.currentTrack){
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function (car){
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if(distance >= 0.1 && distance < 0.25){
                    console.log('Beep! Beep!');
                } else if(distance >= 0.25 && distance < 0.5){
                    console.log('Beep!');
                } else{
                    console.log('');
                }
            }
        }
    }
}