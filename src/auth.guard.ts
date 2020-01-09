import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService){}
  canActivate(
    context: ExecutionContext,
  ) {
    
    const { headers } = context.switchToHttp().getRequest() 
    const id = '1'
    const foundUser =this.userService.getUserwithID(id)
    if(foundUser) return true
    console.log(headers)
    return false;
  }
}
