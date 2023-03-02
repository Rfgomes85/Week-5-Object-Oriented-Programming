const x = 10; {
    let x  = 2
    console.log(x);
}
console.log(x);

let myString = `Hello
world
my name
is Nick.`;

console.log(myString);
//Callbacks example
let username = sendHttpRequest('getUser');
console.log(username);

function logUserName(user) {
    console.log(user);
}
sendHttpRequest('getUser', logUserName);

sendHttpRequest('getUser', user => console.log(user));
//Promises example Promises are objects
doSomethingThatReturnsAPromise()
.then((value))

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
   //more customer objects with the same schema
];

// Step 0:  Declare a variable to reference the first customer object in the customers array:

let customer = customers ;

// Step 1:  To determine whether the membershipLevel field within a customer object is 'GOLD', you would need to do the following:

if ( customers.membershipLevel ==  'GOLD' ) {
     console.log('GOLD');
}

// Step 2:  To determine whether the membershipLevel field within a customer object is 'SILVER', you would need to do the following:


if ( customers.membershipLevel ==  'SILVER' ) {
     console.log('SILVER');
}

// Step 3:  To determine whether the membershipLevel field within a customer object is 'PLATINUM', you would need to do the following:


if ( customers.membershipLevel ==  'PLATINUM' ) {
     console.log('PLATINUM');
}
