const drivers = ['John', "", "Mike", "Mary"];
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(filter("John", drivers));

let driversArray = ['John', 'Jane', 'Mike', 'Mike', 'Johnny'];

function fuzzyMatch (drivers, query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()) )
}

console.log(fuzzyMatch(drivers, "Jo"))

let driversObj = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
console.log(matchName(drivers, 'Bobby')); 