function cook(num, act1, act2, act3, act4, act5){
    let number = Number(num);
    let actions = [act1, act2, act3, act4, act5];

    for(let i = 0; i < 5; i++){
        if(actions[i] === 'chop'){
            number /= 2
        }
        else if(actions[i] === 'dice'){
            number = Math.sqrt(number);
        }
        else if(actions[i] === 'spice'){
            number++;
        }
        else if(actions[i] === 'bake'){
            number *= 3;
        }
        else if(actions[i] === 'fillet'){
            number -= (number * 0.2);
        }

        console.log(number);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');