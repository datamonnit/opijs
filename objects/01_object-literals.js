// Create an object
let player = {
    firstName: "Stu",
    lastName: "Student",
    age: 16,
    points: 0,
    eyeColor: "blue",
    sayHi: function(){
        return `Heippa ${this.firstName}!`;
    },
    get getPoints() {
        return this.points;
    },
    set setPoints(p) {
        this.points = p;
    }

}

// Loop throug object
// for (x in player) {
//     document.writeln(`${x} : ${player[x]}<br>`);
// }

// Add a property
player.nationality = "Finnish";

// Delete a property
delete player.eyeColor;

document.write(player.sayHi());

console.log(player);
