import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateClassDto } from './dto/CreateTaskDto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }
    
    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): string {
        return this.tasksService.deleteTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateClassDto) : Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Patch('/:id/status')
    patchTaskById(
        @Param('id') id: string, 
        @Body('status') status: TaskStatus,
        ): Task {
        return this.tasksService.patchTaskById(id,status);
    }
}
