console.log("Anna");
const { faker } = require('@faker-js/faker')
const lodash = require('lodash');
const users = []
const createUsers = (count) => {
    for (let i = 0; i < count; i++) {
        const userName = faker.person.firstName();
        const email = faker.internet.email();
        // const userPhone = faker.phone.phoneNumber();
        const user = {
            userName,
            email,
            // userPhone
        }
        users.push(user)
    }
    return users
}
const fakeUsers = createUsers(10)
const sortedUsers = lodash.sortBy(fakeUsers, "userName")
console.log(fakeUsers);
console.log(sortedUsers);