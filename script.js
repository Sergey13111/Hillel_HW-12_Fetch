"use strict";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.error(error))

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("data", data);
        // const user = data.filter(user => (user.company.name === 'Johns Group'));
        const user = data.filter(({company:{name}}) => name === 'Johns Group');
        return console.log(user);
    } catch (error) {
        console.log(error);
    } finally {
        // console.log("Finished!");
    }
};

getUsers();
