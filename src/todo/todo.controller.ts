import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly toDoService:TodoService) {
       
    }
    @Get()
    async getAll(){
        const Todo=await this.toDoService.getAll()
        if(Todo) return Todo
        return null
    }
    @Post('add')
    async add(@Body() body){
        const Todo =await this.toDoService.add(body.todolist)
        if(Todo)
            return Todo
        return null
    }
    @Post('delete')
    async delete(@Body() body){
        const Todo =await this.toDoService.delete(body.id)
        if(Todo)
            return Todo
        return null
    }
    @Post('edit')
    async edit(@Body() body){
        const Todo =await this.toDoService.edit(body.id,body.todolist)
        if(Todo)
            return Todo
        return null
    }
}
