import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClassDto } from './dto/CreateTaskDto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}

    // getAllTasks() : Task[] {
    //     return this.tasks;
    // }

    async getTaskById(id: number) : Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if (!found){
            throw new NotFoundException(`Task with Id "${id}" not found`);
        }
        return found;
    }

    // deleteTaskById(id: string) : string {
    //     this.tasks = this.tasks.filter(task => task.id !== id);
    //     return 'Task id:'.concat(id,' was deleted!');
    // }

    async createTask(createTaskDto: CreateClassDto) : Promise<Task>{

        return this.taskRepository.createTask(createTaskDto);
        
    }
    // createTask(createTaskDto: CreateClassDto) : Task {
    //     const { title , description } = createTaskDto;

    //     const task: Task = {
    //         id: v1(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // patchTaskById(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}

