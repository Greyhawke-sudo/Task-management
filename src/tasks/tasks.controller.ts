import { Controller, Get, Post, Body, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateClassDto } from './dto/CreateTaskDto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService) {}

    // @Get()
    // getAllTasks(): Task[] {
    //     return this.tasksService.getAllTasks();
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    
    // @Delete('/:id')
    // deleteTaskById(@Param('id') id: string): string {
    //     return this.tasksService.deleteTaskById(id);
    // }

    @Post()
    createTask(@Body() createTaskDto: CreateClassDto) : Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    // @Patch('/:id/status')
    // patchTaskById(
    //     @Param('id') id: string, 
    //     @Body('status') status: TaskStatus,
    //     ): Task {
    //     return this.tasksService.patchTaskById(id,status);
    // }
}
