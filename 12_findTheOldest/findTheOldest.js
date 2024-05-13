const findTheOldest2 = function(people) {
    people.sort((a, b) => {
        const year = new Date().getFullYear();
        let ageA;
        let ageB;
        "yearOfDeath" in a ? ageA = a.yearOfDeath - a.yearOfBirth : ageA = year - a.yearOfBirth;
        "yearOfDeath" in b ? ageB = b.yearOfDeath - b.yearOfBirth : ageB = year - b.yearOfBirth;
        return ageB - ageA;
    })
    return people[0];
};


const findTheOldest = function(people){
    const year = new Date().getFullYear();
    return people.reduce((target, current) => {
        "yearOfDeath" in target ? ageTarget = target.yearOfDeath - target.yearOfBirth : ageTarget = year - target.yearOfBirth;
        "yearOfDeath" in current ? ageCurrent = current.yearOfDeath - current.yearOfBirth : ageCurrent = year - current.yearOfBirth;
        if(ageCurrent > ageTarget) return current;
        return target;
    })
}

// Do not edit below this line
module.exports = findTheOldest;
