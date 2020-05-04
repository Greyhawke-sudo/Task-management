import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v1} from 'uuid';
import { CreateClassDto } from './dto/CreateTaskDto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks() : Task[] {
        return this.tasks;
    }

    getTaskById(id: string) : Task {
        return this.tasks.find(task => task.id === id);
    }

    deleteTaskById(id: string) : string {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return 'Task id:'.concat(id,' was deleted!');
    }

    createTask(createTaskDto: CreateClassDto) : Task {
        const { title , description } = createTaskDto;

        const task: Task = {
            id: v1(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }

    patchTaskById(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}

