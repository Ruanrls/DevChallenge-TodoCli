import inquirer from "inquirer";

const todoTask = async (list: any) => {

    inquirer.registerPrompt('search-checkbox', require('inquirer-search-checkbox'));

    let todos = await inquirer.prompt([{

        name: 'todos',
        type: 'search-checkbox',
        message: 'You can choose tasks to update to completed',
        choices: list.map((task) => {
            return { name: task.description, value: task.id }
        })

    }])

    return todos.todos
}

export { todoTask }