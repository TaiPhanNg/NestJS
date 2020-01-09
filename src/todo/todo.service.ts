import { Injectable } from '@nestjs/common';
import *as uid from 'uid'
@Injectable()
export class TodoService {
    private toDoLists: any[] = [
        {
            id: '1',
            todolist: 'Eat'
        },
        {
            id: 2,
            todolist: 'Love'
        },
        {
            id: 3,
            todolist: 'study'
        },

    ]
    async getAll()
    {
        return this.toDoLists
    }
    async getTodowithID(id: string) {
        //return users with specificed id
        return this.toDoLists.find(todo => todo.id === id);
    }
    async delete(id: string) {

        this.toDoLists = this.toDoLists.filter(todo => todo.id !== id);
        return this.toDoLists
    }
    async add(todolist: string) {
        const temp = {
            id: uid(100),
            todolist
        }
        this.toDoLists.push(temp)
        return this.toDoLists
    }
    async edit(id: string, todolist: string) {
        return this.toDoLists.map(todo => {
            if(todo.id===id){
            todo.todolist = todolist;
            }
            return todo
        })
       
    }
}
