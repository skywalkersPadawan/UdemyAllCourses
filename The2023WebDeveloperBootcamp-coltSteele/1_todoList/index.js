// alert('hello this is an alert in the main box');

let input = prompt('what do you like to do:');
const todos = ['collect chicken eggs', 'clean the litter box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************');
    } else if (input === 'new') {
        const newTodo = prompt('what is the new todo: ');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('ok, enter an index to delete: '));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log(`Unknown index: ${index} enter a proper index`);
        }
    }
    input = prompt('what would you like to do:');
}
console.log('ok then you can quit the application');
