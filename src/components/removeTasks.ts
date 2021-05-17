import inquirer from "inquirer";

const removeTasks = async (taskList: any[]) => {

    inquirer.registerPrompt('search-checkbox', require('inquirer-search-checkbox'));

    let tasksIds = await inquirer.prompt([{

        type: "search-checkbox",
        name: 'remove',
        message: 'Select the tasks that you want to remove!',
        choices: taskList.map((task) => {

            return { name: task.description, value: task.id }

        })

    }]);

    return tasksIds.remove
}

export { removeTasks }