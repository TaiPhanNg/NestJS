import { Injectable } from '@nestjs/common';
import { toASCII } from 'punycode';
import { access } from 'fs';
import *as jwt from "jsonwebtoken"
@Injectable()
export class UserService {
    //
    private userLists: any[] = [
        {
            id: 4,
            username: 'Taiphan',
            password: '123',
        },
        {
            id: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            id: 2,
            username: 'chris',
            password: 'secret',
        },
        {
            id: 3,
            username: 'maria',
            password: 'guess',
        }
    ]
    async getUserwithID(id: string) {
        //return users with specificed id
        return this.userLists.find(user => user.id === id);
    }
    async getAlluser(id: string) {
        return this.userLists
    }
    async login(name:string, pass:string)
    {
        const founduser =this.userLists.find(user=> user.username===name && user.password=== pass)
        try{
            const access_token= jwt.sign(founduser,"123")
            return {
                founduser,
                status:"ok",
                message:"success",
                token: access_token 
              };
        }
        catch{
            return {
                status:"not ok",
                message:"fail"
            }
        }
    }
}
