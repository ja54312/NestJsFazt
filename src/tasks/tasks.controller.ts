import { Controller,Get,Post,Put,Patch,Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }

     @Post()
    createTask() {
        return 'Task created';
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
