// SOLID

// 5 design principles

// 1. Single Responsibilyty Principle (SRP): class should have only one job or responsibilyt

class UserAdder {
    constructor(userList){
        this.userList = userList;
    }

   addUser(user) {
    this.userList.push(user);
   }
}

class UserDeleter {
    constructor(userList){
        this.userList = userList;
    }

    deleteUSer(userId){
        const index = this.userLIst.findIndex(user => user.id === userId);
        if (index !== -1) {
            this.userList.splice(index, 1)
        
        }
}
}

class UserDisplayer{
    constructor(userList){
        this.userList = userList;
    }
    displayUsers(){
        console.log('Users:');
        this.userLIst.array.forEach(user=>console.log(`ID: ${user.id}, ${user.name}`));
            
        };
    }
const user1 = {id: 1, name : 'Ihor'};
const user2 = {id: 2, name : 'Iryna'};
const users = [user1, user2];
user1.name = 'Luy';

console.log(users, users[0]);

const add = new UserAdder(users);
add.addUser({id:3, name: "Kim"})

// 2. o