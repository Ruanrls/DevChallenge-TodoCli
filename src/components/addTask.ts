import inquirer from "inquirer";

const addTask = async () => {

    inquirer.registerPrompt('date', require('inquirer-date-prompt'));

    let task = await inquirer.prompt([
        {
            name: 'description',
            message: 'Describe your task: ',
            type: 'input',
            validate: (answer) => {

                if (answer.length == 0)
                    return false;

                return true;
            }
        },
        {
            name: "priority",
            message: 'Which is the task priority?',
            type: 'list',
            choices: [{ name: 'low', value: 0 }, { name: 'medium', value: 1 }, { name: 'high', value: 2 }]
        },
        {
            name: 'date_limit',
            message: "When do you want to complete? (it should be bigger than today)",
            type: 'date',
            format: { hour: undefined, minute: undefined },
            clearable: true,
            default: new Date(),
            validate: (date) => {
                if (date < Date.now())
                    return false;

                return true;
            }
        }
    ])

    return task
}

export { addTask }