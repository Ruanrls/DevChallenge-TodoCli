import inquirer from "inquirer";

const Menu = async () => {

    let choice = await inquirer.prompt({
        name: 'menu',
        message: 'Choose a menu option: ',
        type: "list",
        choices: [
            "Add new task",
            "Remove task",
            "Todo list",
            "All tasks",
            "Next tasks",
            "Exit"
        ]
    })

    return choice.menu
}

export { Menu }