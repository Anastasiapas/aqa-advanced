function toDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Response was not ok");
            }
            return response.json();
        });
}

function user() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Response was not ok")
            }
            return response.json();
        });
}


Promise.all([toDo(), user()])
    .then(result => {
        const [todo, user] = result;
        console.log('ToDo function: ', todo);
        console.log('\n')
        console.log('User function: ', user);
    })
    .catch(error => {
        console.error(error)
    });

Promise.race([toDo(), user()])
    .then(result => {
        console.log('Resolved:', result);
        console.log('\n')
    })
    .catch(error => {
        console.error(error);
    });
