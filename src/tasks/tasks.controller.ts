import { Controller,Get,Post,Put,Patch,Delete,Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }

     @Post()
    createTask(@Body() task: any) {
        return this.tasksService.createTask(task);
  }

  @Put()
  updateTask() {
      return 'Task updated';
  }

  @Delete()
  deleteTask() {
      return 'Task deleted';
  }

  @Patch()
  patchTask() {
      return 'Task status updated';
  }
}
