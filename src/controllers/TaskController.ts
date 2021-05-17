import { TaskService } from "../service/TaskService"
import { addTask } from '../components/addTask'
import { removeTasks } from "../components/removeTasks";
import { todoTask } from "../components/todoTask";
import { createTable, renderTable } from '../components/table'
import chalk from "chalk";

class TaskController {

    private service: TaskService;

    constructor() {

        this.service = new TaskService()

    }

    create = async () => {

        let task = await addTask()

        await this.service.create(task)

        console.log(chalk.green("Task added!"))
    }

    remove = async () => {

        let tasks = await this.service.listAll();

        if (tasks.length == 0)
            return

        let removeIds = await removeTasks(tasks);

        await this.service.removeByIds(removeIds)

        console.log(chalk.red("Task removed!"))
    }

    todo = async () => {

        let tasks = await this.service.listByStatus('pending')

        let updateIds = await todoTask(tasks)

        updateIds.forEach(async (id: string) => {
            await this.service.setState({ id, newState: 'completed' })
        })

        if (updateIds.length > 0) {

            console.log(chalk.green("Tasks updated!"))
        }

        return tasks
    }

    all = async () => {

        let allTasks = await this.service.listAll()

        let notFinished = allTasks.filter((item) => {

            if (item.status === 'pending')
                return false
            return true;

        });

        let percentage: number | string = ((notFinished.length / allTasks.length) * 100)

        if (percentage >= 60) {

            percentage = chalk.green(percentage.toFixed(2) + "%")
        } else {

            percentage = chalk.red(percentage.toFixed(2) + "%")
        }

        console.log(`Not finished: ${notFinished.length}/${allTasks.length} - ${percentage}`)

        let table = createTable(allTasks);

        renderTable(table);

        return allTasks
    }

    nextTasks = async () => {

        let nextTasks = await this.service.listNextTasks()

        let table = createTable(nextTasks);

        renderTable(table);
    }

}

export { TaskController }