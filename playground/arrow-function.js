var square = (x) => x*x;

console.log( square(9));

var use = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
use.sayHiAlt();
use.sayHi(1,2,3);