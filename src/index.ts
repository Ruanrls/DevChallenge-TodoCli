import { Menu } from "./components/menu";
import { createConnection } from 'typeorm'
import { TaskController } from "./controllers/TaskController"
import figlet from "figlet"

createConnection().then(async () => {

    figlet("WELCOME!", function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return
        }

        console.log(data)
    })

    const taskController = new TaskController()

    let menuChoice: string;

    while (1) {

        menuChoice = await Menu()

        if (menuChoice === 'Add new task') {

            await taskController.create()

        } else if (menuChoice === 'Remove task') {

            await taskController.remove()

        } else if (menuChoice === 'Todo list') {

            await taskController.todo()

        } else if (menuChoice === 'All tasks') {

            await taskController.all();

        } else if (menuChoice === 'Next tasks') {

            await taskController.nextTasks();

        } else {
            break;
        }

    }

})

