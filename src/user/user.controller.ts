import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth.guard';
@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
   constructor(private readonly userService:UserService) {
       
   }
    @Get()
    async getAllUser(){
    }
    // https://abc.com/user/recentltadded
    @Get('recentlyadded')
    async getLostUser(){
        return ["losst"]
    }
    @Post('userwithID')
    async getUserwithID(@Body() body){
        const foundUser =await this.userService.getUserwithID(body.id)
        if (foundUser) return foundUser
        return null
    }
    @Post('login')
    async login(@Body() body){
        return this.userService.login(body.username, body.password)
    }

}
