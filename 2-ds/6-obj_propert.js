//Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
let user = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};

function isEveryoneHere(userObj) {
    if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEveryoneHere(user));

//We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

const countOnline = (allUsers) => {
    let count = 0;
    for (const user in allUsers) {
        if (allUsers[user].online === true) {
            count++;
        }
    }
    return count;
}

console.log(countOnline(users));

//inish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let userss = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
  
console.log(getArrayOfUsers(userss));

//Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
let userer = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(userer, 'Pete'));