const numbers = [0, 3, 1, 9, 20, 13, -1, 1];

const names = ['Ivan D', 'Tia G', 'Brendan B', 'Matteo B', 'Sean O', 'Markus F'];

const users = [
    {
        id: 1,
        name: 'Ivan D',
        position: 'Software Dev',
        age: 16
    },
    {
        id: 2,
        name: 'John Doe',
        position: 'Software Dev',
        age: 60
    },
    {
        id: 3,
        name: 'John Smith',
        position: 'HR Manager',
        age: 24
    }
];

const comments = [
    {
        text: 'I like it',
        author: 'Brendan Benoit',
        children: [
            {
                text: 'What exactly did you like?',
                author: 'Tia',
                children: []
            }
        ]
    },
    {
        text: 'The way the code performs',
        author: 'Brendan Benoit',
        children: [
            {
                text: '+1',
                author: 'Matteo Bandiera',
                children: []
            }
        ]
    }
];

function log(...args) {
    console.log(...args, '\n');
}

const isPositive = (number) => number > 0;

const isEven = (number) => number % 2 === 0;

const isOdd = (number) => number % 2 === 1;

// map
const doubles = numbers.map((number, index) => number * 2);

const userIds = users.map((user) => user.id);

const initials = names.map((name) => {
    const [firstName, lastName] = name.split(' ');
    return firstName.charAt(0) + lastName.charAt(0);
});

log('.map()');
log('doubles', doubles);
log('userIds', userIds);
log('initials', initials);

// filter
const positiveDecimals = numbers.filter(isPositive);
const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);
const minors = users.filter((user) => user.age < 18);

log('.filter()');
log('positiveDecimals', positiveDecimals);
log('evenNumbers', evenNumbers);
log('oddNumbers', oddNumbers);
log('minors', minors);

// some
const hasPositiveNumbers = numbers.some(isPositive);

log('.some()');
log('hasPositiveNumbers', hasPositiveNumbers);

// every
const areAllPositive = numbers.every(isPositive);

log('.every()');
log('areAllPositive', areAllPositive);

// sort - is mutable and it changes the array. [...numbers] is a shallow copy
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const sortedUsersByAge = [...users].sort((u1, u2) => u1.age - u2.age);

log('.sort()');
log('sortedNumbers', sortedNumbers);
log('sortedUsersByAge', sortedUsersByAge);

// .find(), .findIndex(), .indexOf()
const userWithId2 = users.find((user) => user.id === 2);
const userWithId3Index = users.findIndex((user) => user.id === 3);
const indexOfNumber10 = numbers.indexOf(10);

log('.find()', '.findIndex()', '.indexOf()');
log('userWithId2', userWithId2);
log('userWithId3Index', userWithId3Index);
log('indexOfNumber10', indexOfNumber10);

// .slice() - immutable
// delete user(id === 2) from the users list
const indexOfUserWithId2 = users.findIndex((user) => user.id === 2);
const usersModified1 = [
    ...users.slice(0, indexOfUserWithId2),
    ...users.slice(indexOfUserWithId2 + 1)
];

log('.slice()');
log('usersModified', usersModified1);

// .splice() - mutable
// delete user(id === 2) from the users list
const usersCopy = [...users];
usersCopy.splice(indexOfUserWithId2, 1);
log('.splice()');
log('usersModified', usersCopy);

// .flat()
log('.flat()', [1, 2, 3, [4, 5, 6, [7, 8, [9, [10]]]]].flat(4));

// .flatMap()
log(
    '.flatMap()',
    comments.flatMap((comment) => comment.children)
);

// .reduce()
const uniqueNumbers = numbers.reduce((accumulator, currentNumber, index) => {
    if (!accumulator.includes(currentNumber)) {
        accumulator.push(currentNumber);
    }
    return accumulator;
}, []);

log('.reduce()');
log('uniqueNumbers', uniqueNumbers);

// using reduce as replacement

log(
    'reduce as map',
    doubles,
    numbers.reduce((acc, number) => {
        acc.push(number * 2);
        return acc;
    }, [])
);

log(
    'reduce as filter',
    positiveDecimals,
    numbers.reduce((acc, number) => {
        if (isPositive(number)) {
            acc.push(number);
        }
        return acc;
    }, [])
);

log(
    'reduce as some',
    hasPositiveNumbers,
    numbers.reduce((acc, number) => {
        return isPositive(number) || acc;
    }, false)
);

log(
    'reduce as every',
    areAllPositive,
    numbers.reduce((acc, number) => {
        return isPositive(number) && acc;
    }, true)
);

log(
    'reduce as find',
    userWithId2,
    users.reduce((acc, user) => {
        if (acc) {
            return acc;
        }
        if (user.id === 2) {
            return user;
        }
        return undefined;
    }, undefined)
);

log(
    'reduce as findIndex',
    userWithId3Index,
    users.reduce((acc, user, index) => {
        if (acc !== -1) {
            return acc;
        }
        if (user.id === 3) {
            return index;
        }
        return -1;
    }, -1)
);
