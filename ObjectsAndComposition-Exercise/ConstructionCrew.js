function solve(obj){
    if (obj['dizziness']) {
        obj['levelOfHydrated'] += 0.1 * obj['experience'] * obj['weight'];
        obj['dizziness'] = false;
    }

    return obj;
}

console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));