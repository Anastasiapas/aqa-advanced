async function toDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (response.status!== 200) {
            throw new Error('Request failed')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in toDo function ',error);
        throw error;
    }
}

async function user() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (response.status!== 200) {
            throw new Error('Request failed')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in user function ',error);
        throw error;
    }
}


async function fetchAll() {
    try {
        const [toDoData, userData] = await Promise.all([toDo(), user()])
        console.log('ToDo function:', toDoData);
        console.log('\n');
        console.log('User function:', userData);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

async function fetchRace() {
    try {
        const result = await Promise.race([toDo(), user()]);
        console.log('Resolved:', result);
        console.log('\n');
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

fetchAll();
fetchRace();
