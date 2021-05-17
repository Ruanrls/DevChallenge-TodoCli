import { getRepository, Repository } from 'typeorm'
import { Task } from '../entities/Task'

interface ICreateTask {

    description: string;

    date_limit?: string;

    priority: number;
}

interface IUpdateTask {
    id: string;

    newState: string;
}

class TaskService {

    private repository: Repository<Task>

    constructor() {
        this.repository = getRepository(Task)
    }


    /*
        create: Create a new task
    */
    create = async (task: ICreateTask) => {

        let entityCreated = this.repository.create(task);

        await this.repository.save(entityCreated)

        return entityCreated
    }


    /* 
        setState: Update the current state of a task
    */
    setState = async (taskUpdated: IUpdateTask) => {

        await this.repository.update(taskUpdated.id, { status: taskUpdated.newState })

        return taskUpdated;
    }


    /* 
        remove: Remove a task from database
    */
    removeByIds = async (ids: string[]) => {

        ids.forEach(async (id) => {

            let entity = await this.repository.findOne({ id })

            await this.repository.remove(entity);

        })

        return ids
    }


    /* 
        listAll: List all tasks from database
    */
    listAll = async () => {

        let tasks = await this.repository.find({ order: { priority: 'DESC' } });

        return tasks
    }


    /* 
        listByStatus: List all tasks that match this status
    */
    listByStatus = async (status: string) => {

        let tasks = await this.repository.find({ status })

        return tasks
    }

    listNextTasks = async () => {

        let tasks = await this.repository
            .query('SELECT * FROM task GROUP BY priority LIMIT 3')

        return tasks
    }
}

export { TaskService }