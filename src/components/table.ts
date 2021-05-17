import chalk from "chalk";
import Table from "cli-table";

const createTable = (taskList: any) => {

    let table = new Table({

        head: ['Description', 'Priority', 'Date limit', 'Days ago', 'status'],
        colWidths: [30, 10, 20, 10, 20]
    })

    taskList.forEach(task => {

        let priority = task.priority == 0 ? chalk.green("low") : (task.priority == 1 ? chalk.yellow("medium") : chalk.red("high"))

        let created_at = new Date().getTime() - new Date(task.creation_date).getTime()
        created_at = Math.ceil(created_at / (1000 * 3600 * 24));//get the difference in days

        let date_limit = new Date(task.date_limit).toLocaleDateString()

        let status = task.status == 'pending' ? chalk.redBright('pending') : chalk.green('completed')

        table.push(
            [task.description, priority, date_limit, `${created_at} days`, status]
        )

    });

    return table;

}

const renderTable = (table: Table) => {

    console.log(table.toString());

}

export { createTable, renderTable }